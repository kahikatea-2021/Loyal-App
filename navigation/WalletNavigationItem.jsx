import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ScanScreen from '../screen/ScanScreen'
import WalletScreen from '../screen/WalletScreen'

const StackNavigator = createStackNavigator()

function WalletNavigationItem() {
	return (
		<StackNavigator.Navigator>
			<StackNavigator.Screen
				name="Stamp"
				component={WalletScreen}
				options={{
					title: 'Request Stamp',
					headerTitleAlign: 'center',
				}}
			/>
		</StackNavigator.Navigator>
	)
}

export default WalletNavigationItem
