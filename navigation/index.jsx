import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import ScanNavigator from './ScanNavigator'
import WalletScreen from '../screen/WalletScreen'
import HomeNavigationItem from './HomeNavigationItem'
import {
	CARD, HOME, SCAN, WALLET,
} from './screenDefinitions'
import WalletNavigationItem from './WalletNavigationItem'

const AppTab = createBottomTabNavigator()

function Index () {
	return (
		<AppTab.Navigator>
			<AppTab.Screen
				name={WALLET}
				component={WalletNavigationItem}
				options={{
					tabBarIcon: ({ color }) => <MaterialCommunityIcons name="cards" size={24} color={color} />,
				}}
			/>
			<AppTab.Screen
				name={SCAN}
				component={ScanNavigator}
				options={{
					tabBarIcon: ({ color }) => <TabIcon color={color} name="qr-code-scanner" />,
				}}
			/>

			<AppTab.Screen
				name={HOME}
				component={HomeNavigationItem}
				options={{
					title: 'Account',
					tabBarIcon: ({ color }) => <TabIcon color={color} name="supervised-user-circle" />,
				}}
			/>
		</AppTab.Navigator>
	)
}

function TabIcon ({ name, color }) {
	return <MaterialIcons name={name} color={color} size={30} />
}

export default Index
