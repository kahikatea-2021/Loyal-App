import React, { useLayoutEffect } from 'react'
import {
	SafeAreaView, Button, Text, TouchableOpacity, View,
} from 'react-native'
import firebase from 'firebase/app'
import { auth } from '../auth'
import 'firebase/firestore'

function HomeScreen ({ navigation }) {
	firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then((idToken) => {
		console.log(idToken)
		// Send token to your backend via HTTPS
		// ...
	}).catch((error) => {
		// Handle error
	})
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
