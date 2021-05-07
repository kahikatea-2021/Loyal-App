import React, { useState, useEffect } from 'react'
import {
	SafeAreaView, TextInput, Text, Button, Platform, StyleSheet, KeyboardAvoidingView, Image, ScrollView,
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
				navigation.replace('BottomNavigation')
			}
		})
		return unsubscribe
	}, [])
	const signIn = () => {
		auth
			.signInWithEmailAndPassword(email, password)
			.catch((error) => {
				const errorCode = error.code
				const errorMessage = error.message
				alert(errorMessage)
			})
	}
	return (
		<KeyboardAvoidingView behaviour="position" style={styles.container}>
			<ScrollView>
				<SafeAreaView>
					<Image
						style={styles.logo}
						source={require('../assets/coffee.jpg')}
					/>
					<TextInput
						style={styles.inputContainer}
						placeholder="E-mail"
						autofocus
						type="email"
						value={email}
						onChangeText={(text) => setEmail(text)}
					/>
					<TextInput
						style={styles.inputContainer}
						placeholder="Password"
						type="password"
						secureTextEntry
						value={password}
						onChangeText={(text) => setPassword(text)}
						onSubmitEditing={signIn}
					/>
				</SafeAreaView>
				<Button style={styles.button} onPress={signIn} title="Login" />
				<Button style={styles.button} onPress={() => navigation.navigate('Register')} title="Register as User" type="outline" />
				<Button style={styles.button} onPress={() => navigation.navigate('StoreRegister')} title="Register as Store" type="outline" />
				<Button style={styles.button} onPress={() => navigation.navigate('ResetPassword')} title="Reset Password" type="outline" />

			</ScrollView>
		</KeyboardAvoidingView>
	)
}

export default LoginScreen
