import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ScanScreen from '../screen/ScanScreen'

const StackNavigator = createStackNavigator()

function ScanNavigator() {
	return (
		<StackNavigator.Navigator>
			<StackNavigator.Screen
				name="Stamp"
				component={ScanScreen}
				options={{
					title: 'Request Stamp',
					headerTitleAlign: 'center',
				}}
			/>
		</StackNavigator.Navigator>
	)
}

export default ScanNavigator
