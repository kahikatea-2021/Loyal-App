import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import store from './store'
import LoginScreen from './screen/LoginScreen'
import BottomNavigation from './navigation'
import StoreNavigation from './storeNavigation'

import RegisterScreen from './screen/RegisterScreen'
import StoreRegisterScreen from './screen/StoreRegisterScreen'
import ResetPasswordScreen from './screen/ResetPasswordScreen'
import { CARD } from './navigation/screenDefinitions'
import CardScreen from './screen/CardScreen'

const AppStack = createStackNavigator()

export default function App () {
	return (
		<Provider store={store}>
			<SafeAreaProvider>
				<StatusBar style="light" />
				<NavigationContainer>
					<AppStack.Navigator
						screenOptions={{
							headerShown: false,
						}}
					>
						<AppStack.Screen
							name="Login"
							component={LoginScreen}
						/>
						<AppStack.Screen
							options={{
								headerShown: true,
								title: 'Register',
							}}
							name="Register"
							component={RegisterScreen}
						/>
						<AppStack.Screen
							name="StoreRegister"
							component={StoreRegisterScreen}
							options={{
								headerShown: true,
							}}
						/>
						<AppStack.Screen
							name="ResetPassword"
							component={ResetPasswordScreen}
							options={{
								headerShown: true,
							}}
						/>
						<AppStack.Screen
							name={CARD}
							component={CardScreen}
						/>
						<AppStack.Screen
							name="StoreNavigation"
							component={StoreNavigation}
						/>
						<AppStack.Screen
							name="BottomNavigation"
							component={BottomNavigation}
						/>
					</AppStack.Navigator>
				</NavigationContainer>
				<StatusBar />
			</SafeAreaProvider>
		</Provider>

	)
}
