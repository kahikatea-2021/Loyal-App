
import React, { useState, useLayoutEffect } from 'react'

import {
	TouchableOpacity, SafeAreaView, TextInput, Text, Button, StyleSheet, KeyboardAvoidingView, Image, ScrollView, ActivityIndicator,
} from 'react-native'

import { registerStoreUser } from './accountHelper'

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
	wrap: {
		alignItems: 'center',
		borderWidth: 1,
		borderRadius: 10,
		borderColor: '#1282E9',
		backgroundColor: '#3C97EA',
		padding: 9,
		margin: 4,
	},
	text: {
		color: '#fff',
		fontSize: 20,
	},
})

function StoreRegister ({ navigation }) {
	useLayoutEffect(() => {
		navigation.setOptions({
			title: 'Register your Store',
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

	const [storeName, setStoreName] = useState('')
	const [adminFirstName, setAdminFirstName] = useState('')
	const [adminLastName, setAdminLastName] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [address, setAddress] = useState('')
	const [loading, setLoading] = useState(false)

	function registerStore () {
		setLoading(true)

		registerStoreUser({
			storeName,
			address,
			adminFirstName,
			adminLastName,
			phone,
			email,
			password,
		}).finally(() => {
			setLoading(false)
		})
	}

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
						placeholder="Store Name"
						autoCapitalize="none"
						autofocus
						type="text"
						value={storeName}
						onChangeText={(text) => setStoreName(text)}
					/>
					<TextInput
						style={styles.inputContainer}
						placeholder="Store Address"
						autoCapitalize="none"
						autofocus
						type="text"
						value={address}
						onChangeText={(text) => setAddress(text)}
					/>
					<TextInput
						style={styles.inputContainer}
						placeholder="First Name"
						type="text"
						value={adminFirstName}
						onChangeText={(text) => setAdminFirstName(text)}
					/>
					<TextInput
						style={styles.inputContainer}
						placeholder="Last Name"
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
				<TouchableOpacity style={styles.wrap} onPress={registerStore}>
					<Text style={styles.text}>Register</Text>
				</TouchableOpacity>
				<ActivityIndicator color="white" animating={loading} size="large" />
			</ScrollView>
		</KeyboardAvoidingView>
	)
}

export default StoreRegister
