import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'
import { Button, View } from 'react-native'
import StoreDetailScreen from '../screen/StoreDetailScreen'
import StoreCardCreator from '../screen/StoreCardCreator'
import { auth } from '../auth'

const AppTab = createBottomTabNavigator()

function Index () {
	return (
		<AppTab.Navigator>
			<AppTab.Screen
				name="Home"
				component={StoreDetailScreen}
				options={{
					title: 'Home',
					tabBarIcon: ({ color }) => <TabIcon color={color} name="home" />,
				}}
			/>
			<AppTab.Screen
				name="createCard"
				component={StoreCardCreator}
				options={{
					title: 'Create Card',
					tabBarIcon: ({ color }) => <TabIcon color={color} name="library-add" />,
				}}
			/>
		</AppTab.Navigator>
	)
}

function TabIcon ({ name, color }) {
	return <MaterialIcons name={name} color={color} size={30} />
}

export default Index
