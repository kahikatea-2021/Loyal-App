import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
// import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Navigation from './navigation'

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
	return (
		<SafeAreaProvider>
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
			<StatusBar />
		</SafeAreaProvider>
	)
}
