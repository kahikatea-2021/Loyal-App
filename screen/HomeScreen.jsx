import React, { useLayoutEffect } from 'react'
import {
	SafeAreaView, Button, Text, TouchableOpacity, View,
} from 'react-native'
import firebase from 'firebase/app'
import { auth } from '../auth'
import 'firebase/firestore'

function HomeScreen ({ navigation }) {
	firebase.auth().onAuthStateChanged((user) => {
		if (user) {
			// User is signed in.
			user.getIdToken().then((token) => {
				console.log(token)
			})
			// ...
		} else {
			// User is signed out.
			// ...
		}
	})
	const signOutUser = () => {
		auth.signOut().then(() => {
			navigation.replace('Login')
		})
	}
	useLayoutEffect(() => {
		navigation.setOptions({
			title: 'Account',
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
