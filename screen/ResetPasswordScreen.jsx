
import React, { useState, useLayoutEffect } from 'react'
import {
	TouchableOpacity,
	SafeAreaView,
	TextInput,
	Text,
	StyleSheet,
	Image,
	ActivityIndicator,
} from 'react-native'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

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
		borderColor: '#FF8902',
		backgroundColor: '#FF8902',
		padding: 9,
		margin: 4,
	},
})

function ResetPassword ({ navigation }) {
	const [email, setEmail] = useState('')
	const [loading, setLoading] = useState(false)

	const reset = () => {
		setLoading(true)
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
		<KeyboardAwareScrollView contentContainerStyle={styles.container}>
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
		</KeyboardAwareScrollView>

	)
}

export default ResetPassword
