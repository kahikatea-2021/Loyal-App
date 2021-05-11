import React, { useState } from 'react'
import {
	TouchableOpacity,
	SafeAreaView,
	Text,
	StyleSheet,
	KeyboardAvoidingView,
	Image,
	ActivityIndicator,
	Linking,
} from 'react-native'
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
		textAlign: 'center',
	},
})
function StoreAccountScreen () {
	const user = useSelector((state) => state.user)
	const [loading, setLoading] = useState(false)

	const signOutUser = () => {
		setLoading(true)

		auth().signOut()
			.finally(() => {
				setLoading(false)
			})
	}
	return (
		<KeyboardAvoidingView behaviour="position" style={styles.container}>
			<Image
				style={styles.logo}
				source={require('../assets/testIcon.png')}
			/>
			<SafeAreaView style={styles.email}>
				<Text style={styles.emailText}>Our stores are our world, if you would like speak to an expert directly about setting up your card or a customised card. Call us from the link below between 7:00 NZT - 19:00 NZT</Text>
				<TouchableOpacity style={styles.wrap} onPress={() => Linking.openURL(`tel:${'0278676748'}`)}>
					<Text>Support Line</Text>
				</TouchableOpacity>
				<Text style={styles.emailText}>Require other assistance or have a suggestion?</Text>
				<TouchableOpacity style={styles.wrap} onPress={() => Linking.openURL('mailto:loyalrewardsapp@gmail.com?')}>
					<Text>Send us an email!</Text>
				</TouchableOpacity>
			</SafeAreaView>
			<SafeAreaView>
				{user && (
					<>
						<Text style={styles.text}>
							Current User:
							{` ${user.displayName}`}
						</Text>
						<Text style={styles.text}>
							Email:
							{` ${user.email}`}
						</Text>
					</>
				)}
			</SafeAreaView>
			<TouchableOpacity style={styles.wrap} onPress={signOutUser}>
				<Text style={styles.text}>Sign Out</Text>
			</TouchableOpacity>
			<ActivityIndicator color="white" animating={loading} size="large" />

		</KeyboardAvoidingView>
	)
}

export default StoreAccountScreen
