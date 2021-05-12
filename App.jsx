import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import React, { useCallback, useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import * as SplashScreen from 'expo-splash-screen'
import {
	ActivityIndicator,
	Alert, Modal, Pressable, StyleSheet, Text, View,
} from 'react-native'
import { isFirebaseAppExisted, initializeFirebase, auth } from './firebase'
import store from './store'
import LoginScreen from './screen/LoginScreen'
import BottomNavigation from './navigation'
import StoreNavigation from './storeNavigation'
import RegisterScreen from './screen/RegisterScreen'
import StoreRegisterScreen from './screen/StoreRegisterScreen'
import ResetPasswordScreen from './screen/ResetPasswordScreen'
import { CARD } from './navigation/screenDefinitions'
import CardScreen from './screen/CardScreen'
import colors from './theme/color'
import { FORGOT_PASSWORD, LOGIN, REGISTER } from './navigationNames'
import { showAlertAction } from './store/actions/infoActions'
import StoreCardCreatorScreen from './screen/StoreCardCreator'

const AppStack = createStackNavigator()

const AppLightTheme = {
	...DarkTheme,
	colors: {
		...DarkTheme.colors,
		...colors.light,
	},
}

const styles = StyleSheet.create({
	centeredView: {
	  flex: 1,
	  justifyContent: 'center',
	  alignItems: 'center',
	  marginTop: 22,
	},
	modalView: {
	  margin: 20,
	  backgroundColor: 'white',
	  borderRadius: 20,
	  padding: 35,
	  alignItems: 'center',
	  shadowColor: '#000',
	  shadowOffset: {
			width: 0,
			height: 2,
	  },
	  shadowOpacity: 0.25,
	  shadowRadius: 4,
	  elevation: 5,
	},
	button: {
	  borderRadius: 20,
	  padding: 10,
	  elevation: 2,
	},
	buttonOpen: {
	  backgroundColor: '#F194FF',
	},
	buttonClose: {
	  backgroundColor: '#2196F3',
	},
	textStyle: {
	  color: 'white',
	  fontWeight: 'bold',
	  textAlign: 'center',
	},
	modalText: {
	  marginBottom: 15,
	  textAlign: 'center',
	},
})

export default function App () {
	const [modalVisible, setModalVisible] = useState(false)
	if (!isFirebaseAppExisted()) {
		initializeFirebase()
	}

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

		auth().onAuthStateChanged((user) => {
			if (user) {
				const { displayName, email, emailVerified } = user
				store.dispatch({
					type: 'USER',
					user: {
						displayName,
						email,
						emailVerified,
					},
				})

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
				store.dispatch({ type: 'USER', user: {} })
				setAppState({
					appIsReady: true,
					isAuthenticated: false,
					claim: {
						isStore: false,
						isUser: false,
					},
				})
			}
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
				const { info, loadingIndicator } = store.getState()
				console.log(store.getState())
				if (loadingIndicator) {
					setModalVisible(loadingIndicator)
				}

				if (info.show) {
					switch (info.message) {
					case 'auth/invalid-email':
						onAlert('Please use a valid email address')
						break
					case 'auth/wrong-password':
						onAlert('Wrong password, please try again')
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
					case 'auth/too-many-requests':
						onAlert('We have disabled all requests from this device due to unusual activity. Please try again later.')
						break
					default:
						try {
							const errorObj = JSON.parse(info.message)
							onAlert(errorObj.message)
						} catch (err) {
							onAlert('Error has occured, please try again.')
						}
						break
					}
				}
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
				<Modal
					animationType="slide"
					transparent
					visible={modalVisible}
					onRequestClose={() => {
						Alert.alert('Modal has been closed.')
						setModalVisible(!modalVisible)
					}}
				>
					<View style={styles.centeredView}>
						<View style={[styles.container, styles.horizontal, styles.modalView]}>
							<ActivityIndicator size="large" color={colors.light.primary} />
							<Text>Please wait...</Text>
						</View>
					</View>
				</Modal>
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
									<AppStack.Screen
										name="StoreCardCreator"
										component={StoreCardCreatorScreen}
										options={{
											headerShown: true,
											headerLeft: null,

										}}
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
