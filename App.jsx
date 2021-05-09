import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Provider } from 'react-redux'
// import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useState } from 'react/cjs/react.development'

import store from './store'
import firebase from './auth'

import Navigation from './navigation'
import LoginScreen from './screen/LoginScreen'
import BottomNavigation from './navigation'
import RegisterScreen from './screen/RegisterScreen'
import StoreRegisterScreen from './screen/StoreRegisterScreen'
import HomeScreen from './screen/HomeScreen'
import ResetPasswordScreen from './screen/ResetPasswordScreen'
import StoreDetailScreen from './screen/StoreDetailScreen'

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
							name="Register"
							component={RegisterScreen}
							options={{
								headerShown: true,
							}}
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
							name="BottomNavigation"
							component={BottomNavigation}
						/>
					</AppStack.Navigator>
				</NavigationContainer>

			</SafeAreaProvider>
		</Provider>

	)
}
