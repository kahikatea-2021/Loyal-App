import { registerRootComponent } from 'expo'
import request from 'superagent'
import React, { useState, useLayoutEffect } from 'react'

import {
	TouchableOpacity, SafeAreaView, TextInput, Text, Button, StyleSheet, KeyboardAvoidingView, Image, ScrollView, ActivityIndicator,
} from 'react-native'

import { auth } from '../auth/index'

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

function ResetPassword ({ navigation }) {
	const [email, setEmail] = useState('')
	const [loading, setLoading] = useState(false)

	const reset = () => {
		setLoading(true)

		auth.sendPasswordResetEmail(email)
			.then(() => {
				navigation.navigate('Login')
				alert('You should recieve an email shortly')
			}).catch((error) => {
				console.log(error.code)
				switch (error.code) {
				case 'auth/invalid-email':
					alert('Please use a valid email address')
					break
				case 'auth/user-not-found':
					alert('This account is not registered')
					break
				}
			}).finally(() => {
				setLoading(false)
			})
	}
	useLayoutEffect(() => {
		navigation.setOptions({
			title: 'Reset your Password',
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

	return (
		<KeyboardAvoidingView behavior="position" style={styles.container}>
			<ScrollView>
				<SafeAreaView>
					<Image
						style={styles.logo}
						source={require('../assets/testIcon.png')}
					/>
					<TextInput
						style={styles.inputContainer}
						placeholder="E-mail"
						autoCapitalize="none"
						type="email"
						value={email}
						onChangeText={(text) => setEmail(text)}
					/>
					<TouchableOpacity style={styles.wrap} onPress={reset}>
						<Text style={styles.text}>Reset</Text>
					</TouchableOpacity>
					<ActivityIndicator color="white" animating={loading} size="large" />
				</SafeAreaView>
			</ScrollView>
		</KeyboardAvoidingView>
	)
}

export default ResetPassword
