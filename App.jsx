import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
// import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useState } from 'react/cjs/react.development'
import firebase from 'firebase/app'
import Navigation from './navigation'
import LoginScreen from './screen/LoginScreen'

/* const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
}) */

const firebaseConfig = {
	apiKey: 'AIzaSyAV8RHScWgUvU57E9lo4M2XpF8Ohablkb4',
	authDomain: 'loyal-cbd69.firebaseapp.com',
	projectId: 'loyal-cbd69',
	appId: '1:552424010228:web:71970ae45cb3f3cca889a1',
	measurementId: 'G-Y8481BN92Z',
}

firebase.initializeApp(firebaseConfig)

const AppStack = createStackNavigator()

export default function App () {
	// eslint-disable-next-line no-unused-vars
	const [isLoggedIn, setLoggedIn] = useState(false)
	return (
		<SafeAreaProvider>
			{isLoggedIn
				? (
					<NavigationContainer>
						<AppStack.Navigator
							screenOptions={{
								headerShown: false,
							}}
						>
							<AppStack.Screen
								name="BottomNavigation"
								component={Navigation}
							/>
						</AppStack.Navigator>
					</NavigationContainer>
				)
				: <LoginScreen />}
			<StatusBar />
		</SafeAreaProvider>
	)
}
