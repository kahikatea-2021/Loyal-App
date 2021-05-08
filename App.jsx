import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
// import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useState } from 'react/cjs/react.development'
import store from './store'
import Navigation from './navigation'
import LoginScreen from './screen/LoginScreen'
import firebase from './auth'
import RegisterScreen from './screen/RegisterScreen'
import HomeScreen from './screen/HomeScreen'
import ResetPasswordScreen from './screen/ResetPasswordScreen'
import StoreDetailScreen from './screen/StoreDetailScreen'

const AppStack = createStackNavigator()

export default function App () {
	return (
		<Provider store={store}>
			<SafeAreaProvider>
				<NavigationContainer>
					<AppStack.Navigator
						screenOptions={{
							headerShown: true,
						}}
					>
						<AppStack.Screen
							name="Login"
							component={LoginScreen}
						/>
						<AppStack.Screen
							name="Register"
							component={RegisterScreen}
						/>
						<AppStack.Screen
							name="ResetPassword"
							component={ResetPasswordScreen}
						/>
						<AppStack.Screen
							name="BottomNavigation"
							component={StoreDetailScreen}
						/>
					</AppStack.Navigator>
				</NavigationContainer>

			</SafeAreaProvider>
		</Provider>

	)
}
