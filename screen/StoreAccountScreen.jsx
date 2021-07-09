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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
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
		backgroundColor: '#1282E9',
		padding: 9,
		marginBottom: 10,
	},
	text: {
		color: '#fff',
		fontSize: 20,
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
		<KeyboardAwareScrollView contentContainerStyle={styles.container}>

			<Image
				style={styles.logo}
				source={require('../assets/testIcon.png')}
			/>
			<SafeAreaView style={styles.help}>
				<Text style={styles.helpText}>
					Our stores are our world,
					if you would like speak to an expert directly
					about setting up your card or a customised card.
					Call us from the link below between 7:00 NZT - 19:00 NZT
				</Text>
				<TouchableOpacity style={styles.wrap} onPress={() => Linking.openURL(`tel:${'0278676748'}`)}>
					<Text style={styles.textSupport}>Support Line</Text>
				</TouchableOpacity>
				<Text style={styles.helpText}>Require other assistance or have a suggestion?</Text>
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
			<ActivityIndicator color="white" animating={loading} size="large" />
		</KeyboardAwareScrollView>

	)
}

export default StoreAccountScreen
