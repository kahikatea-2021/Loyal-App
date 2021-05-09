import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import React, { useCallback, useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import * as SplashScreen from 'expo-splash-screen'
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
import { FORGOT_PASSWORD, LOGIN, REGISTER } from './navigationNames'

const AppStack = createStackNavigator()

export default function App () {
	// const [appState, setAppState]
	const [appIsReady, setAppIsReady] = useState(false)
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [claim, setClaim] = useState({
		isStore: false,
		isUser: false,
	})

	useEffect(() => {
		setAppIsReady(false)
		async function prepare() {
			try {
				// Keep the splash screen visible while we fetch resources
				await SplashScreen.preventAutoHideAsync()
			} catch (e) {
				console.warn(e)
			}
		}
		prepare()

		auth.onAuthStateChanged((user) => {
			console.log(user)
			if (user) {
				setIsAuthenticated(true)
				user.getIdTokenResult(true).then((idToken) => {
					if (idToken.claims.shop) {
						setClaim({
							isStore: true,
							isUser: false,
						})
					} else {
						setClaim({
							isStore: false,
							isUser: true,
						})
					}
				})
			} else {
				setIsAuthenticated(false)
			}
			setTimeout(() => {
				setAppIsReady(true)
			}, 3000)
		})
	}, [])

	const onLayoutRootView = useCallback(async () => {
		if (appIsReady) {
			await SplashScreen.hideAsync()
		}
	}, [appIsReady])

	if (!appIsReady) {
		return null
	}

	return (
		<Provider store={store}>
			<SafeAreaProvider>
				<StatusBar style={{ }} />
				<NavigationContainer onReady={onLayoutRootView}>

					<AppStack.Navigator screenOptions={{
						headerShown: false,
					}}
					>
						{ !isAuthenticated
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
