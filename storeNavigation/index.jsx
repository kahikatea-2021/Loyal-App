import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'
import { Button, View } from 'react-native'
import StoreDetailScreen from '../screen/StoreDetailScreen'
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
				name="Setting"
				component={() => (
					<View style={{ marginTop: 50 }}>
						<Button
							onPress={() => {
								auth.signOut()
							}}
							title="heheh"
						/>
					</View>
				)}
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
