
import React from 'react'
import {
	SafeAreaView, Text, Button, Platform, StyleSheet,
} from 'react-native'
import * as WebBrowser from 'expo-web-browser'
import firebase from '../auth'

WebBrowser.maybeCompleteAuthSession()

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})

firebase.auth().onAuthStateChanged((user) => {
	console.log(user)
})

firebase.auth().signOut()

function LoginScreen() {
	function loginUser() {
		firebase.auth().signInWithEmailAndPassword('test@test.co.nz', 'abcdefg')
	}

	return (
		<SafeAreaView style={styles.container}>
			<Button
				onPress={loginUser}
				title="Create User"
			/>
		</SafeAreaView>
	)
}

export default LoginScreen
