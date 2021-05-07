import React, { useLayoutEffect } from 'react'
import {
	SafeAreaView, Button, Text, TouchableOpacity, View,
} from 'react-native'
import { auth } from '../auth'

function HomeScreen ({ navigation }) {
	const signOutUser = () => {
		auth.signOut().then(() => {
			navigation.replace('Login')
		})
	}
	useLayoutEffect(() => {
		navigation.setOptions({
			title: 'Loyal',
			headerStyle: { backgroundColor: '#fff' },

		})
	}, [])

	return (
		<SafeAreaView>
			<View>
				<Button onPress={signOutUser} title="Sign Out" />
				<Text>Hello World</Text>
			</View>
		</SafeAreaView>
	)
}

export default HomeScreen
