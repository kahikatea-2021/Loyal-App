import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ScanScreen from '../screen/ScanScreen'
import WalletScreen from '../screen/WalletScreen'
import color from '../theme/color'

const StackNavigator = createStackNavigator()

function WalletNavigationItem() {
	return (
		<StackNavigator.Navigator>
			<StackNavigator.Screen
				name="Stamp"
				component={WalletScreen}
				options={{
					title: 'My Wallet',
					headerTitleAlign: 'center',
					headerStyle: {
						backgroundColor: color.light.primary,
					},
				}}
			/>
		</StackNavigator.Navigator>
	)
}

export default WalletNavigationItem
