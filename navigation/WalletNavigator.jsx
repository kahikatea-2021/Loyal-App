import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import WalletScreen from '../screen/WalletScreen'

const StackNavigator = createStackNavigator()

function WalletNavigator() {
	return (
		<StackNavigator.Navigator>
			<StackNavigator.Screen
				name="Wallet"
				component={WalletScreen}
				options={{
					title: 'Wallet',
					headerTitleAlign: 'center',
				}}
			/>
		</StackNavigator.Navigator>
	)
}

export default WalletNavigator
