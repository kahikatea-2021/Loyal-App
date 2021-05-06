import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
// import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useState } from 'react/cjs/react.development'
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

const AppStack = createStackNavigator()

export default function App () {
	// eslint-disable-next-line no-unused-vars
	const [isLoggedIn, setLoggedIn] = useState(true)
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
