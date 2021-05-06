import React, { useState, useEffect } from 'react'
import {
	SafeAreaView, TextInput, Text, Button, StyleSheet, KeyboardAvoidingView,
} from 'react-native'

function RegisterScreen ({ navigation }) {
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	return (
		<KeyboardAvoidingView behavior="padding" style={styles.container}>
			<Text>Hello</Text>
		</KeyboardAvoidingView>
	)
}

const styles = StyleSheet.create({
	container: {

	},
})

export default RegisterScreen
