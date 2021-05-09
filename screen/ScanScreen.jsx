import React, { useEffect, useState, useLayoutEffect } from 'react'
import {
	Text, StyleSheet, Button, Dimensions, View, Image,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { useDispatch } from 'react-redux'
import { CARD } from '../navigation/screenDefinitions'
import { stampCard } from './stampHelper'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
	},
	scanBox: {
		width: 220,
		height: 218,
		alignSelf: 'center',
		margin: 60,
		borderRadius: 3,
	},
	scan: {
		color: '#FCFAF1',
		textAlign: 'center',
		fontSize: 30,
		marginBottom: 5,
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
})

function HomeScreen() {
	const [isPermitted, setPermit] = useState(null)
	const [scannedCode, setScannedCode] = useState(false)
	const navigation = useNavigation()
	const dispatch = useDispatch()

	useLayoutEffect(() => {
		navigation.setOptions({
			title: '',
			headerStyle: {
				backgroundColor: '#49378E',
				shadowColor: 'transparent',
			},
		})
	}, [navigation])

	async function requestForPermission() {
		const { status } = await BarCodeScanner.requestPermissionsAsync()
		setPermit(status === 'granted')
	}

	function handleCodeScanned({ data }) {
		setScannedCode(true)
		// eslint-disable-next-line no-console
		console.log(data)
		// alert(data)
		stampCard(dispatch)
		navigation.navigate(CARD)
	}

	useEffect(() => {
		requestForPermission()
	}, [])

	if (isPermitted === null) {
		return <Text>Requesting for camera permission</Text>
	}

	if (isPermitted === false) {
		return <Text>No access to camera</Text>
	}

	return (
		<SafeAreaView style={styles.container}>

			<BarCodeScanner
				onBarCodeScanned={scannedCode ? undefined : handleCodeScanned}
				style={StyleSheet.absoluteFillObject}

			/>
			<Text style={styles.scan}>Scan QR Code</Text>
			<Image
				style={styles.scanBox}
				source={require('../assets/scanFrame.png')}
			/>

			<Text>
				{scannedCode && <Button color="#FCFAF1" alignSelf="center" title="Tap to Scan Again" onPress={() => setScannedCode(false)} />}
			</Text>

		</SafeAreaView>
	)
}

export default HomeScreen
