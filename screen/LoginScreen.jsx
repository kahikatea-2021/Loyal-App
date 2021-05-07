import React, { useState, useEffect } from 'react'
import {
	SafeAreaView, TextInput, Text, Button, Platform, StyleSheet, KeyboardAvoidingView, Image,
} from 'react-native'
import * as WebBrowser from 'expo-web-browser'
import { set } from 'react-native-reanimated'
import { auth } from '../auth'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputContainer: {
		width: 300,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: '#0B82D6',
		padding: 9,
		margin: 4,

	},
	button: {
		width: 200,
		marginTop: 10,
	},
	logo: {
		width: 170,
		height: 168,
		alignSelf: 'center',
		margin: 20,
		borderRadius: 10,
	},
})

function LoginScreen ({ navigation }) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				navigation.replace('Home')
			}
		})
		return unsubscribe
	}, [])
	const signIn = () => {

	}
	return (
		<KeyboardAvoidingView behaviour="padding" style={styles.container}>
			<SafeAreaView>
				<Image
					style={styles.logo}
					source={require('../assets/coffee.jpg')}
				/>
				<TextInput style={styles.inputContainer} placeholder="E-mail" autofocus type="email" value={email} onChangeText={(text) => setEmail(text)} />
				<TextInput style={styles.inputContainer} placeholder="Password" type="password" secureTextEntry value={password} onChangeText={(text) => setPassword(text)} />
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
