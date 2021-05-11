import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import React, { useCallback, useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import * as SplashScreen from 'expo-splash-screen'
import { Alert } from 'react-native'
import store from './store'
import LoginScreen from './screen/LoginScreen'
import BottomNavigation from './navigation'
import StoreNavigation from './storeNavigation'
import RegisterScreen from './screen/RegisterScreen'
import StoreRegisterScreen from './screen/StoreRegisterScreen'
import ResetPasswordScreen from './screen/ResetPasswordScreen'
import { CARD } from './navigation/screenDefinitions'
import CardScreen from './screen/CardScreen'
import { auth } from './auth'
import colors from './theme/color'

import { FORGOT_PASSWORD, LOGIN, REGISTER } from './navigationNames'

const AppStack = createStackNavigator()
// const SPLASH_SCREEN_TIME = 3000

const AppLightTheme = {
	...DarkTheme,
	colors: {
		...DarkTheme.colors,
		...colors.light,
	},
}

export default function App () {
	// const colorSchema = useColorScheme()
	let unsubcribed
	const [appState, setAppState] = useState({
		appIsReady: false,
		isAuthenticated: false,
		claim: {
			isStore: false,
			isUser: false,
		},
	})
	const { appIsReady, isAuthenticated, claim } = appState

	useEffect(() => {
		async function prepare () {
			try {
				// Keep the splash screen visible while we fetch resources
				await SplashScreen.preventAutoHideAsync()
			} catch (e) {
				console.warn(e)
			}
		}
		prepare()

		auth.onAuthStateChanged((user) => {
			if (user) {
				user.getIdTokenResult(true).then((idToken) => {
					if (idToken.claims.shop) {
						setAppState({
							appIsReady: true,
							isAuthenticated: true,
							claim: {
								isStore: true,
								isUser: false,
							},
						})
					} else {
						console.log('this state')
						setAppState({
							appIsReady: true,
							isAuthenticated: true,
							claim: {
								isStore: false,
								isUser: true,
							},
						})
					}
				})
			} else {
				setAppState({
					appIsReady: true,
					isAuthenticated: false,
					claim: {
						isStore: false,
						isUser: false,
					},
				})
			}
			store.dispatch({ type: 'USER', user })
		})
	}, [])

	function onAlert (message) {
		Alert.alert('Error', message, [
			{
				onPress: () => {
					store.dispatch(showAlertAction({
						show: false,
						message: '',
					}))
				},
			},
		])
	}
	const onLayoutRootView = useCallback(async () => {
		if (appIsReady) {
			await SplashScreen.hideAsync()
			if (unsubcribed) { unsubcribed() }
			unsubcribed = store.subscribe(() => {
				const { info } = store.getState()
				if (info.show) {
					switch (info.message) {
						case 'auth/invalid-email':
							onAlert('Please use a valid email')
							break
						case 'auth/wrong-password':
							onAlert('Please enter correct password')
							break
						case 'auth/user-not-found':
							onAlert('This account is not registered')
							break
						case 'auth/email-already-exists':
							onAlert('This account is already registered')
							break
						case 'auth/invalid-password':
							onAlert('Please enter a password at least 6 characters long')
							break
						default:
							onAlert(info.message)
							break
					}
				}

				/* if (store) {
					store.dispatch(showAlertAction(
						{
							show: false,
							message: "",
						},
					))
				} */
			})
		}
	}, [appIsReady])

	if (!appIsReady) {
		return null
	}
	return (
		<Provider store={store}>
			<SafeAreaProvider>
				<StatusBar style="light" />
				<NavigationContainer theme={AppLightTheme} onReady={onLayoutRootView}>
					<AppStack.Navigator screenOptions={{
						headerShown: false,
						headerStyle: {
							backgroundColor: colors.light.primary,
						},
					}}
					>

						{!isAuthenticated
							&& (
								<>
									<AppStack.Screen name={LOGIN} component={LoginScreen} />
									<AppStack.Screen
										options={{
											headerShown: true,
											title: 'Register',
										}}
										name={REGISTER}
										component={RegisterScreen}
									/>
									<AppStack.Screen
										name="StoreRegister"
										component={StoreRegisterScreen}
										options={{
											title: 'Store Register',
											headerShown: true,
										}}
									/>

								</>
							)}
						{
							isAuthenticated && claim.isUser
							&& (
								<>
									<AppStack.Screen
										name="BottomNavigation"
										component={BottomNavigation}
									/>
									<AppStack.Screen
										options={{
											animationTypeForReplace: 'pop',
										}}
										name={CARD}
										component={CardScreen}
									/>
								</>
							)
						}

						{
							isAuthenticated && claim.isStore
							&& (
								<>
									<AppStack.Screen
										name="StoreNavigation"
										component={StoreNavigation}
									/>
								</>
							)
						}
						<AppStack.Screen
							name={FORGOT_PASSWORD}
							component={ResetPasswordScreen}
							options={{
								headerShown: true,
							}}
						/>

					</AppStack.Navigator>
				</NavigationContainer>
			</SafeAreaProvider>
		</Provider>
	)
}
