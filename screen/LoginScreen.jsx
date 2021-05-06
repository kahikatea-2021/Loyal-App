import React, { useState, useEffect } from 'react'
import {
	SafeAreaView, TextInput, Text, Button, Platform, StyleSheet, KeyboardAvoidingView,
} from 'react-native'
import * as WebBrowser from 'expo-web-browser'
import { set } from 'react-native-reanimated'
import firebase from '../auth'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputContainer: {
		width: 300,
		borderColor: 'black',

	},
	button: {
		width: 200,
		marginTop: 10,
	},
})

function LoginScreen ({ navigation }) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	// const signIn = () => {
	console.log(email)
	console.log(password)
	// }
	const signIn = () => {

	}
	return (
		<KeyboardAvoidingView behaviour="padding" style={styles.container}>
			<SafeAreaView style={styles.inputContainer}>
				<TextInput placeholder="email" autofocus type="email" value={email} onChangeText={(text) => setEmail(text)} />
				<TextInput placeholder="password" type="password" secureTextEntry value={password} onChangeText={(text) => setPassword(text)} />
			</SafeAreaView>

			<Button style={styles.button} onPress={signIn} title="Login" />
			<Button style={styles.button} onPress={() => navigation.navigate('Register')} title="Register" type="outline" />
		</KeyboardAvoidingView>
	)
}
{ /* <Button
				onPress={loginUser}
				title="Create User"
			/> */ }

// WebBrowser.maybeCompleteAuthSession()
// firebase.auth().onAuthStateChanged((user) => {
// 	console.log(user)
// })
// function loginUser () {
// 	firebase.auth().signInWithEmailAndPassword('test@test.co.nz', 'abcdefg')
// }
// firebase.auth().signOut()

export default LoginScreen
