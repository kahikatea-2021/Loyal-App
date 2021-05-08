import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CardScreen from '../screen/CardScreen'

const StackNavigator = createStackNavigator()

function CardNavigator() {
	return (
		<StackNavigator.Navigator>
			<StackNavigator.Screen
				name="Card"
				component={CardScreen}
				options={{
					title: 'Card',
					headerTitleAlign: 'center',
				}}
			/>
		</StackNavigator.Navigator>
	)
}

export default CardNavigator
