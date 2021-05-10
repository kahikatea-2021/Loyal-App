import React, { useLayoutEffect } from 'react'
import {
	SafeAreaView, Button, Text, TouchableOpacity, View, StyleSheet, KeyboardAvoidingView, KeyboardAvoidingViewComponent,
} from 'react-native'
import firebase from 'firebase/app'
import { auth } from '../auth'
import 'firebase/firestore'
import { useSelector } from 'react-redux'

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
	const user = useSelector((state) => state.user)
	firebase.auth().onAuthStateChanged((user) => {
		if (user) {
			// User is signed in.
			user.getIdToken().then((token) => {
				console.log(token)
				console.log(token)
			})
			// ...
		} else {
			// User is signed out.
			// ...
		}
	})

	const signOutUser = () => {
		auth.signOut()
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
	function convertUnixTime (unix) {
		const a = new Date(unix * 1000)
		const year = a.getFullYear()
		const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
		const month = months[a.getMonth()]
		const date = a.getDate()
		const hour = a.getHours()
		const min = a.getMinutes() < 10 ? `0${a.getMinutes()}` : a.getMinutes()
		const sec = a.getSeconds() < 10 ? `0${a.getSeconds()}` : a.getSeconds()
		return `${month} ${date}, ${year}, ${hour}:${min}:${sec}`
	}
	console.log(user)
	return (
		<KeyboardAvoidingView behaviour="position" style={styles.container}>
			<SafeAreaView>

				{user && (
					<>
						<Text style={styles.text}>
							Account Created:
							{convertUnixTime(1620603044647)}
						</Text>
						<Text style={styles.text}>
							User:
							{user.displayName}
						</Text>
						<Text style={styles.text}>
							Email:
							{user.email}
						</Text>
					</>
				)}
			</SafeAreaView>
			<TouchableOpacity style={styles.wrap} onPress={signOutUser}>
				<Text style={styles.text}>Sign Out</Text>
			</TouchableOpacity>
		</KeyboardAvoidingView>

	)
}

export default HomeScreen
