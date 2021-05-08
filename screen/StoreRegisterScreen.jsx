
import request from 'superagent'
import React, { useState, useLayoutEffect } from 'react'

import {
	SafeAreaView, TextInput, Text, Button, StyleSheet, KeyboardAvoidingView, Image, ScrollView,
} from 'react-native'

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

function StoreRegister ({ navigation }) {
	useLayoutEffect(() => {
		navigation.setOptions({
			headerBackTitle: 'Login',
		})
	}, [navigation])

	const [storeName, setStoreName] = useState('')
	const [adminFirstName, setAdminFirstName] = useState('')
	const [adminLastName, setAdminLastName] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const registerStore = () => {
		request
			.post('https://effc9dad5017.ngrok.io/v1/api/')
			.send({
				storeName,
				adminFirstName,
				adminLastName,
				phone,
				email,
				password,
			})
			.then((response) => {
				if (response) {
					console.log(response.body)
					navigation.replace('BottomNavigation')
				}
			}).catch((error) => {
				const errorCode = error.code
				const errorMessage = error.message
				alert(errorMessage)
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
						placeholder="Store Name"
						autoCapitalize="none"
						autofocus
						type="text"
						value={storeName}
						onChangeText={(text) => setStoreName(text)}
					/>
					<TextInput
						style={styles.inputContainer}
						placeholder="First Name"
						autoCapitalize="none"
						autofocus
						type="text"
						value={adminFirstName}
						onChangeText={(text) => setAdminFirstName(text)}
					/>
					<TextInput
						style={styles.inputContainer}
						placeholder="Last Name"
						autoCapitalize="none"
						autofocus
						type="text"
						value={adminLastName}
						onChangeText={(text) => setAdminLastName(text)}
					/>
					<TextInput
						style={styles.inputContainer}
						placeholder="Phone Number"
						type="tel"
						keyboardType="numeric"
						value={phone}
						onChangeText={(num) => setPhone(num)}
					/>
					<TextInput
						style={styles.inputContainer}
						placeholder="E-mail"
						autoCapitalize="none"
						type="email"
						value={email}
						onChangeText={(text) => setEmail(text)}
					/>
					<TextInput
						style={styles.inputContainer}
						placeholder="Password"
						type="password"
						autoCapitalize="none"
						secureTextEntry
						value={password}
						onChangeText={(text) => setPassword(text)}
					/>
				</SafeAreaView>
				<SafeAreaView>
					<Button raised style={styles.button} onPress={registerStore} title="Register" />
				</SafeAreaView>
			</ScrollView>
		</KeyboardAvoidingView>
	)
}

export default StoreRegister
