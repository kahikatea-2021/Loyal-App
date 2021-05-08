import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'
import ScanNavigator from './ScanNavigator'
import HomeScreen from '../screen/HomeScreen'
import CardScreen from '../screen/CardScreen'
import { CARD, HOME, SCAN } from './screenDefinitions'

const AppTab = createBottomTabNavigator()

function Index () {
	return (
		<AppTab.Navigator>
			<AppTab.Screen
				name={SCAN}
				component={ScanNavigator}
				options={{
					tabBarIcon: ({ color }) => <TabIcon color={color} name="qr-code-scanner" />,
				}}
			/>

			<AppTab.Screen
				name={CARD}
				component={CardScreen}
				options={{
					tabBarIcon: ({ color }) => <TabIcon color={color} name="home" />,
				}}
			/>
			<AppTab.Screen
				name={HOME}
				component={HomeScreen}
				options={{
					title: 'Home',
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
