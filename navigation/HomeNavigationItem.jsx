import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screen/HomeScreen'

const StackNavigator = createStackNavigator()

function HomeNavigationItem() {
	return (
		<StackNavigator.Navigator>
			<StackNavigator.Screen
				name="Home"
				component={HomeScreen}
				options={{
					title: 'Homew Stamp',
					headerTitleAlign: 'center',
				}}
			/>
		</StackNavigator.Navigator>
	)
}

export default HomeNavigationItem
