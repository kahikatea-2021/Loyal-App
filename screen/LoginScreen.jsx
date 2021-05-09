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
import { useDispatch } from 'react-redux'
import { FORGOT_PASSWORD, REGISTER } from '../navigationNames'
import { auth } from '../auth'
import { loginUser } from './accountHelper'

const styles = StyleSheet.create({
	container: {
		flex: 1,
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
	const dispatch = useDispatch()
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

	const signIn = () => {
		setLoading(true)
		loginUser({ email, password }, dispatch)
	}
	return (
		<KeyboardAvoidingView behaviour="height" style={styles.container}>
			<SafeAreaView>
				<ScrollView keyboardDismissMode="interactive">

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
						<TouchableOpacity color="#fff" style={styles.wrap} onPress={() => { navigation.navigate(REGISTER) }}>
							<Text style={styles.text}>Register as User</Text>
						</TouchableOpacity>
						<TouchableOpacity color="#fff" style={styles.wrap} onPress={() => navigation.navigate('StoreRegister')}>
							<Text style={styles.text}>Register as Store</Text>
						</TouchableOpacity>
					</SafeAreaView>
					<TouchableOpacity
						style={styles.wrap}
						onPress={() => navigation.navigate(FORGOT_PASSWORD)}
					>
						<Text style={styles.text}>Forgot Password ?</Text>
					</TouchableOpacity>
					<ActivityIndicator color="white" animating={loading} size="large" />
				</ScrollView>
			</SafeAreaView>
		</KeyboardAvoidingView>

	)
}

export default LoginScreen
