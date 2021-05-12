import React, { useLayoutEffect } from 'react'
import {
	Linking, Image,
	SafeAreaView, Button, Text, TouchableOpacity, View, StyleSheet, KeyboardAvoidingView, KeyboardAvoidingViewComponent,
} from 'react-native'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { useSelector } from 'react-redux'
import * as MailComposer from 'expo-mail-composer'
import { auth } from '../firebase'

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
		width: 300,
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
	email: {
		backgroundColor: '#fff',
	},
	emailText: {
		color: '#000',
	},
	help: {
		width: 350,
		alignSelf: 'center',
		alignItems: 'center',
		borderWidth: 3,
		borderRadius: 10,
		borderColor: '#8977CE',
		backgroundColor: '#8977CE',
	},
	helpText: {
		color: '#fff',
		textAlign: 'center',
		fontSize: 15,
		width: 300,
		padding: 10,
	},
	signOut: {
		width: 300,
		alignItems: 'center',
		borderWidth: 1,
		borderRadius: 10,
		borderColor: '#FF8902',
		backgroundColor: '#FF8902',
		padding: 9,
		margin: 10,
	},
	textSupport: {
		color: '#fff',
		fontSize: 20,
	},
	user: {
		width: 350,
		borderWidth: 3,
		borderRadius: 10,
		borderColor: '#8977CE',
		backgroundColor: '#8977CE',
		margin: 5,
		alignItems: 'center',
	},
	userText: {
		textAlign: 'center',
		color: '#fff',
		fontSize: 15,
		padding: 10,
	},
})
function HomeScreen ({ navigation }) {
	const user = useSelector((state) => state.user)

	const signOutUser = () => {
		auth().signOut()
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
	// function convertUnixTime (unix) {
	// 	const a = new Date(unix * 1000)
	// 	const year = a.getFullYear()
	// 	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	// 	const month = months[a.getMonth()]
	// 	const date = a.getDate()
	// 	const hour = a.getHours()
	// 	const min = a.getMinutes() < 10 ? `0${a.getMinutes()}` : a.getMinutes()
	// 	const sec = a.getSeconds() < 10 ? `0${a.getSeconds()}` : a.getSeconds()
	// 	return `${month} ${date}, ${year}, ${hour}:${min}:${sec}`
	// }
	return (
		<KeyboardAvoidingView behaviour="position" style={styles.container}>
			<Image
				style={styles.logo}
				source={require('../assets/testIcon.png')}
			/>
			<SafeAreaView style={styles.help}>
				<Text style={styles.helpText}>Require assistance or have a suggestion?</Text>
				<TouchableOpacity style={styles.wrap} onPress={() => Linking.openURL('mailto:loyalrewardsapp@gmail.com?')}>
					<Text style={styles.textSupport}>Send us an email!</Text>
				</TouchableOpacity>
			</SafeAreaView>
			<SafeAreaView style={styles.user}>
				{user && (
					<>
						<Text style={styles.userText}>
							Current User:
							{` ${user.displayName}`}
							{'\n'}
							Account Email:
							{` ${user.email}`}
						</Text>

						<TouchableOpacity style={styles.signOut} onPress={signOutUser}>
							<Text style={styles.text}>Sign Out</Text>
						</TouchableOpacity>
					</>

				)}
			</SafeAreaView>

		</KeyboardAvoidingView>

	)
}

export default HomeScreen
