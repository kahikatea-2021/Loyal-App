import React, { useLayoutEffect, useState } from 'react'
import {
	TouchableOpacity, ActivityIndicator, SafeAreaView, TextInput, Text, Button, StyleSheet, KeyboardAvoidingView, Image, ScrollView, Alert,
} from 'react-native'
import { useDispatch } from 'react-redux'
import request from 'superagent'
import consume from '../consume'
import { registerUser } from './accountHelper'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputContainer: {
		width: 300,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: '#1282E9',
		backgroundColor: '#fff',
		padding: 9,
		margin: 4,

	},
	button: {
		width: 200,
		// marginTop: 10,
	},
	text: {
		color: '#fff',
		fontSize: 20,
	},
	logo: {
		width: 170,
		height: 168,
		alignSelf: 'center',
		margin: 20,
		borderRadius: 10,
	},
	wrap: {
		alignItems: 'center',
		borderWidth: 1,
		borderRadius: 10,
		borderColor: '#1282E9',
		backgroundColor: '#3C97EA',
		padding: 9,
		margin: 4,
	},
})

function RegisterScreen ({ navigation }) {
	const dispatch = useDispatch()
	useLayoutEffect(() => {
		navigation.setOptions({
			title: 'Create your Loyal Account',
			headerTitleStyle: {
				color: '#fff',
			},
			headerStyle: {
				backgroundColor: '#49378E',
				shadowColor: 'white',
			},
			headerTintColor: '#fff',
		})
	}, [navigation])

	const [userName, setUserName] = useState('')
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const [loading, setLoading] = useState(false)
	const handleRegister = () => {
		setLoading(true)
		registerUser({
			userName,
			firstName,
			lastName,
			phone,
			email,
			password,
		}, dispatch).finally(() => {
			setLoading(false)
		})
		/* request
			.post('https://effc9dad5017.ngrok.io/api/v1/account/register')
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
					navigation.replace('BottomNavigation')
				}
			}).catch((error) => {
				switch (error.code) {
				case 'auth/invalid-email':
					alert('Please use a valid email')
					break
				case 'auth/wrong-password':
					alert('Please enter correct password')
					break
				case 'auth/user-not-found':
					alert('This account is not registered')
					break
				default:
					break
				}
			})
			.finally(() => {
				setLoading(false)
			}) */
	}
	return (

		<KeyboardAvoidingView behavior="padding" style={styles.container}>
			<SafeAreaView>
				<Image
					style={styles.logo}
					source={require('../assets/testIcon.png')}
				/>
				<TextInput
					style={styles.inputContainer}
					placeholder="User Name"
					autoCapitalize="none"
					autofocus
					type="text"
					value={userName}
					onChangeText={(text) => setUserName(text)}
				/>
				<TextInput
					style={styles.inputContainer}
					placeholder="First Name"
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
					keyboardType="phone-pad"
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
				<TouchableOpacity style={styles.wrap} onPress={handleRegister}>
					<Text style={styles.text}>Create Account</Text>
				</TouchableOpacity>
				<ActivityIndicator color="white" animating={loading} size="large" />
			</SafeAreaView>
		</KeyboardAvoidingView>
	)
}

export default RegisterScreen
