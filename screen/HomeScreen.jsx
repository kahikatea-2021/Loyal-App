import React, { useLayoutEffect } from 'react'
import {
	SafeAreaView, Button, Text, TouchableOpacity, View, StyleSheet, KeyboardAvoidingView, KeyboardAvoidingViewComponent,
} from 'react-native'
import firebase from 'firebase/app'
import { auth } from '../auth'
import 'firebase/firestore'

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
function HomeScreen ({ navigation }) {
	firebase.auth().onAuthStateChanged((user) => {
		if (user) {
			// User is signed in.
			user.getIdToken().then((token) => {
				console.log(token)
			})
			// ...
		} else {
			// User is signed out.
			// ...
		}
	})
	const signOutUser = () => {
		auth.signOut().then(() => {
			navigation.replace('Login')
		})
	}
	useLayoutEffect(() => {
		navigation.setOptions({
			title: 'Account',
			headerStyle: {
				backgroundColor: '#49378E',
				shadowColor: 'white',
			},
			headerTitleStyle: {
				color: '#fff',
			},
			headerTintColor: '#fff',
		})
	}, [navigation])

	return (
		<KeyboardAvoidingView behaviour="position" style={styles.container}>
			<TouchableOpacity style={styles.wrap} onPress={signOutUser}>
				<Text style={styles.text}>Sign Out</Text>
			</TouchableOpacity>
		</KeyboardAvoidingView>

	)
}

export default HomeScreen
