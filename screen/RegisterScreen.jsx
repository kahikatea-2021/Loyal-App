import { registerRootComponent } from 'expo'
import request from 'superagent'
import React, { useState, useLayoutEffect } from 'react'
import {
	SafeAreaView, TextInput, Text, Button, StyleSheet, KeyboardAvoidingView, Image, ScrollView,
} from 'react-native'
import { auth } from '../auth/index'

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
		// marginTop: 10,
	},
	text: {
		textAlign: 'center',
		fontSize: 20,
		fontWeight: 'bold',
	},
	logo: {
		width: 170,
		height: 168,
		alignSelf: 'center',
		margin: 20,
		borderRadius: 10,
	},
})

function RegisterScreen ({ navigation }) {
	useLayoutEffect(() => {
		navigation.setOptions({
			headerBackTitle: 'Back to Login',
		})
	}, [navigation])
	const [userName, setUserName] = useState('')
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const registerUser = () => {
		request
			.post('https://1be77e300087.ngrok.io/api/v1/account/register')
			.send({
				userName,
				firstName,
				lastName,
				phone,
				email,
				password,
			})
			.then((response) => {
				if (response) {
					console.log(response.body)
					navigation.replace('BottomNavigation')
				}
			}).catch((err) => {
				console.log(err.message)
			})
	}

	return (
		<KeyboardAvoidingView behavior="position" style={styles.container}>
			<ScrollView>
				<SafeAreaView>
					<Text style={styles.text}>
						Create a Loyal Account

					</Text>
					<Image
						style={styles.logo}
						source={require('../assets/coffee.jpg')}
					/>
					<TextInput
						style={styles.inputContainer}
						placeholder="User Name"
						autofocus
						type="text"
						value={userName}
						onChangeText={(text) => setUserName(text)}
					/>
					<TextInput
						style={styles.inputContainer}
						placeholder="First Name"
						autofocus
						type="text"
						value={firstName}
						onChangeText={(text) => setFirstName(text)}
					/>
					<TextInput
						style={styles.inputContainer}
						placeholder="Last Name"
						type="text"
						value={lastName}
						onChangeText={(text) => setLastName(text)}
					/>
					<TextInput
						style={styles.inputContainer}
						placeholder="Phone Number"
						type="tel"
						value={phone}
						keyboardType="numeric"
						onChangeText={(num) => setPhone(num)}
					/>
					<TextInput
						style={styles.inputContainer}
						placeholder="E-mail"
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
					/>
				</SafeAreaView>
				<SafeAreaView>
					<Button raised style={styles.button} onPress={registerUser} title="Register" />
				</SafeAreaView>
			</ScrollView>
		</KeyboardAvoidingView>
	)
}

export default RegisterScreen
