import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import ScanNavigator from './ScanNavigator'
import HomeScreen from '../screen/HomeScreen'

const AppTab = createBottomTabNavigator()

function Index () {
	return (
		<AppTab.Navigator>
			<AppTab.Screen
				name="Scan"
				component={ScanNavigator}
				options={{
					tabBarIcon: ({ color }) => <TabIcon color={color} name="qr-code-scanner" />,
				}}
			/>
			<AppTab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					tabBarIcon: ({ color }) => <TabIcon color={color} name="home" />,
				}}
			/>
		</AppTab.Navigator>
	)
}

function TabIcon ({ name, color }) {
	return <MaterialIcons name={name} color={color} size={30} />
}

export default Index
