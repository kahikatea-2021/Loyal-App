import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'
import StoreDetailScreen from '../screen/StoreDetailScreen'
import StoreCardCreator from '../screen/StoreCardCreator'
import StoreAccount from '../screen/StoreAccountScreen'

const AppTab = createBottomTabNavigator()

function Index () {
	return (
		<AppTab.Navigator>
			<AppTab.Screen
				name="Home"
				component={StoreDetailScreen}
				options={{
					headerShown: true,
					title: 'Home',
					tabBarIcon: ({ color }) => <TabIcon color={color} name="home" />,
				}}
			/>
			<AppTab.Screen
				name="StoreAccount"
				component={StoreAccount}
				options={{
					title: 'Store Account',
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
