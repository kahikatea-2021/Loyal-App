import React, { useState, useEffect, useLayoutEffect } from 'react'
import {
	SafeAreaView, TextInput, Text, Button, Platform, StyleSheet, KeyboardAvoidingView, Image, ScrollView,
} from 'react-native'
import * as WebBrowser from 'expo-web-browser'
import { set } from 'react-native-reanimated'
import { auth } from '../auth'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#49378E',
		alignItems: 'center',
		justifyContent: 'center',

	},
	inputContainer: {
		fontSize: 20,
		borderWidth: 0,
		borderRadius: 12,
		borderColor: '#1282E9',
		backgroundColor: '#fff',
		padding: 9,
		margin: 4,
	},
	button: {
		width: 200,
		marginTop: 10,
		color: '#FCFAF1',
	},
	logo: {
		width: 170,
		height: 205,
		alignSelf: 'center',
		top: 10,
		marginBottom: 20,
		borderRadius: 15,
	},
	register: {
		flexDirection: 'row',
	},
	wrap: {
		alignItems: 'center',
		borderWidth: 1,
		borderRadius: 10,
		borderColor: '#1282E9',
		backgroundColor: '#FCFAF1',
		padding: 9,
		margin: 4,
	},
})

function LoginScreen ({ navigation }) {
	useLayoutEffect(() => {
		navigation.setOptions({
			title: 'Loyal',
		})
	}, [navigation])
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	useLayoutEffect(() => {
		navigation.setOptions({
			title: '',
			headerStyle: {
				backgroundColor: '#49378E',
				shadowColor: 'transparent',
			},
		})
	}, [navigation])

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				navigation.replace('BottomNavigation')
			}
		})
		return unsubscribe
	}, [])
	const signIn = () => {
		auth.signInWithEmailAndPassword(email, password)
			.catch((error) => {
				console.log(error.code)
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
				}
			})
	}
	return (
		<KeyboardAvoidingView behaviour="position" style={styles.container}>
			<ScrollView>
				<SafeAreaView>
					<Image
						style={styles.logo}
						source={require('../assets/testTitleImage.png')}
					/>
					<TextInput
						style={styles.inputContainer}
						placeholder="E-mail"
						autoCapitalize="none"
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
				<SafeAreaView style={styles.wrap}>
					<Button color="#49378E" style={styles.button} onPress={signIn} title="Login" />
				</SafeAreaView>
				<SafeAreaView style={styles.register}>
					<SafeAreaView style={styles.wrap}>
						<Button color="#49378E" style={styles.button} onPress={() => navigation.navigate('Register')} title="Register as User" type="outline" />
					</SafeAreaView>
					<SafeAreaView style={styles.wrap}>
						<Button color="#49378E" style={styles.button} onPress={() => navigation.navigate('StoreRegister')} title="Register as Store" type="outline" />
					</SafeAreaView>
				</SafeAreaView>
				<SafeAreaView style={styles.wrap}>
					<Button color="#49378E" style={styles.button} onPress={() => navigation.navigate('ResetPassword')} title="Forgot Password ?" type="outline" />
				</SafeAreaView>
			</ScrollView>
		</KeyboardAvoidingView>

	)
}

export default LoginScreen
