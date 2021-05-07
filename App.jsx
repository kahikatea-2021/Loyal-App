import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { Provider } from 'react-redux'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import store from './store'
import Navigation from './navigation'
import LoginScreen from './screen/LoginScreen'
import RegisterScreen from './screen/RegisterScreen'
import HomeScreen from './screen/HomeScreen'
import ResetPasswordScreen from './screen/ResetPasswordScreen'

const AppStack = createStackNavigator()

export default function App () {
	return (
		<Provider store={store}>
			<SafeAreaProvider>
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
							name="ResetPassword"
							component={ResetPasswordScreen}
						/>
						<AppStack.Screen
							name="BottomNavigation"
							component={Navigation}
						/>
					</AppStack.Navigator>
				</NavigationContainer>
				<StatusBar />
			</SafeAreaProvider>
		</Provider>

	)
}
