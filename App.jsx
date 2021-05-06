import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
// import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useState } from 'react/cjs/react.development'
import Navigation from './navigation'
import LoginScreen from './screen/LoginScreen'
import firebase from './auth'
import RegisterScreen from './screen/RegisterScreen'

/* const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
}) */

const AppStack = createStackNavigator()

export default function App () {
	// eslint-disable-next-line no-unused-vars
	return (
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
				</AppStack.Navigator>
			</NavigationContainer>

		</SafeAreaProvider>
	)
}
