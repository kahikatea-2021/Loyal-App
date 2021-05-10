import React, { useState, useEffect, useLayoutEffect } from 'react'
import {
	TouchableOpacity,
	SafeAreaView,
	TextInput, Text,
	StyleSheet,
	KeyboardAvoidingView,
	Image,
	Platform,
	View,
	Button,
	ScrollView,
	ActivityIndicator,
} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { useDispatch } from 'react-redux'
import { createStoreCard } from './storeHelper'

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
		marginLeft: 40,
	},
	button: {
		width: 100,
		marginTop: 10,
	},
	text: {
		color: '#fff',
		fontSize: 20,
		textAlign: 'center',
	},
	header: {
		color: '#fff',
		fontSize: 25,
		margin: 50,
	},
	wrap: {
		alignItems: 'center',
		borderWidth: 1,
		borderRadius: 10,
		borderColor: '#1282E9',
		backgroundColor: '#3C97EA',
		padding: 9,
		margin: 10,
		marginLeft: 40,
		marginRight: 35,
	},
	imageBox: {
		alignItems: 'center',
	},
})

function StoreCardCreator({ navigation }) {
	const [image, setImage] = useState(null)
	console.log(image)
	const dispatch = useDispatch()
	useLayoutEffect(() => {
		navigation.setOptions({
			title: 'Create your loyalty card',
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

	useEffect(() => {
		(async () => {
			if (Platform.OS !== 'web') {
				const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
				if (status !== 'granted') {
					alert('Sorry, we need camera roll permissions to make this work!')
				}
			}
		})()
	}, [])

	const pickImage = async () => {
		console.log('image', ImagePicker)

		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		})

		console.log(result)

		if (!result.cancelled) {
			setImage(result.uri)
		}
	}

	// const [stampCount, setStampCount] = useState('')
	// const [rewardThreshold, setRewardThreshold] = useState('')
	// const []
	return (
		<KeyboardAvoidingView>
			<SafeAreaView>
				<Text style={styles.text, styles.header}>Create your Loyalty Card</Text>
				<TextInput
					style={styles.inputContainer}
					placeholder="Redeem number"
					keyboardType="numeric"
				/>
				<TextInput
					style={styles.inputContainer}
					type="text"
					placeholder="Reward"
				/>
				<TextInput
					style={styles.inputContainer}
					type="text"
					placeholder="Instagram Handle"
				/>

				<TouchableOpacity style={styles.wrap} onPress={pickImage}>
					<Text style={styles.text}>Pick an image from camera roll</Text>
				</TouchableOpacity>
				<SafeAreaView style={styles.imageBox}>
					{image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
				</SafeAreaView>
				<TouchableOpacity style={styles.wrap}>
					<Text style={styles.text}>Create Card</Text>
				</TouchableOpacity>
			</SafeAreaView>
		</KeyboardAvoidingView>
	)
}

export default StoreCardCreator
