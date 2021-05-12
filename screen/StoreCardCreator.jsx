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
	BackHandler,
} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { useDispatch } from 'react-redux'
import { createStoreCard, getStoreDetail } from './storeHelper'

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
		alignSelf: 'center',
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
		textAlign: 'center',

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
		borderColor: '#1282E9',
		backgroundColor: '#3C97EA',
		padding: 9,
		margin: 10,
		alignSelf: 'center',
		width: 300,
	},
	imageBox: {
		alignItems: 'center',
	},
})

function StoreCardCreator ({ navigation }) {
	const [image, setImage] = useState(null)
	const dispatch = useDispatch()
	useLayoutEffect(() => {
		navigation.setOptions({
			title: 'Create your Loyalty Card',
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
		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 0,
			base64: true,
		})

		if (!result.cancelled) {
			setImage(`data:image/png;base64,${result.base64}`)
		}
	}

	const [rewardThreshold, setRewardThreshold] = useState(0)
	const [reward, setReward] = useState('')
	const [instagramHandle, setInstagramHandle] = useState('')

	const [loading, setLoading] = useState(false)
	function handleCardCreation () {
		setLoading(true)
		createStoreCard({
			rewardThreshold,
			reward,
			instagramHandle,
			image,
		}, dispatch)

			.then(() => getStoreDetail(dispatch))
			.then(() => {
				navigation.navigate('Home')
			}).finally(() => {
				setLoading(false)
			})
	}
	useEffect(() => {
		BackHandler.addEventListener('hardwareBackPress', () => true)
		return () => BackHandler.removeEventListener('hardwareBackPress', () => true)
	}, [])
	return (
		<KeyboardAvoidingView style={styles.Container}>
			<SafeAreaView>
				<Image
					style={styles.logo}
					source={require('../assets/testIcon.png')}
				/>
				<TextInput
					style={styles.inputContainer}
					placeholder="Redeem Threshold"
					keyboardType="numeric"
					type="number"
					value={setRewardThreshold}
					onChangeText={(number) => setRewardThreshold(number)}
				/>
				<TextInput
					style={styles.inputContainer}
					type="text"
					placeholder="Reward"
					value={setReward}
					onChangeText={(text) => setReward(text)}
				/>
				<TextInput
					style={styles.inputContainer}
					type="url"
					placeholder="Instagram Handle"
					value={setInstagramHandle}
					onChangeText={(text) => setInstagramHandle(text)}
				/>

				<TouchableOpacity style={styles.wrap} onPress={pickImage}>
					<Text
						style={styles.text}
					>
						Pick an image from camera roll

					</Text>
				</TouchableOpacity>
				<SafeAreaView style={styles.imageBox}>
					{image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
				</SafeAreaView>
				<TouchableOpacity style={styles.wrap} onPress={() => { handleCardCreation() }}>
					<Text style={styles.text}>Create Card</Text>
				</TouchableOpacity>
				<ActivityIndicator color="white" animating={loading} size="large" />
			</SafeAreaView>
		</KeyboardAvoidingView>
	)
}

export default StoreCardCreator
