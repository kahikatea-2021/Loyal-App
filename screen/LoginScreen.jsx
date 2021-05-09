import React, { useState, useEffect, useLayoutEffect } from 'react'
import {
	TouchableOpacity,
	SafeAreaView,
	TextInput, Text,
	StyleSheet,
	KeyboardAvoidingView,
	Image,
	ScrollView,
	ActivityIndicator,
} from 'react-native'
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
		backgroundColor: '#3C97EA',
		padding: 9,
		margin: 4,
	},
	text: {
		color: '#fff',
		fontSize: 20,
	},
})

function LoginScreen ({ navigation }) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [loading, setLoading] = useState(false)

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
				authUser.getIdTokenResult(true).then((idToken) => {
					if (!idToken.claims.shop) { navigation.replace('BottomNavigation') } else navigation.replace('StoreNavigation')
				})
				// navigation.replace('BottomNavigation')
			}
		})
		return unsubscribe
	}, [])
	const signIn = () => {
		setLoading(true)

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
				default:
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

					<TouchableOpacity style={styles.wrap} onPress={signIn}>
						<Text style={styles.text}>Login</Text>
					</TouchableOpacity>
					<SafeAreaView style={styles.register}>
						<TouchableOpacity color="#fff" style={styles.wrap} onPress={() => navigation.navigate('Register')}>
							<Text style={styles.text}>Register as User</Text>
						</TouchableOpacity>
						<TouchableOpacity color="#fff" style={styles.wrap} onPress={() => navigation.navigate('StoreRegister')}>
							<Text style={styles.text}>Register as Store</Text>
						</TouchableOpacity>
					</SafeAreaView>
					<TouchableOpacity style={styles.wrap} onPress={() => navigation.navigate('ResetPassword')}>
						<Text style={styles.text}>Forgot Password ?</Text>
					</TouchableOpacity>
					<ActivityIndicator color="white" animating={loading} size="large" />

				</SafeAreaView>
			</ScrollView>
		</KeyboardAvoidingView>
	)
}

export default LoginScreen
