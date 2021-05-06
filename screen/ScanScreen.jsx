import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { CARD } from '../navigation/screenDefinitions'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
	},
})

function HomeScreen() {
	const [isPermitted, setPermit] = useState(null)
	const [scannedCode, setScannedCode] = useState(false)
	const navigation = useNavigation()

	async function requestForPermission() {
		const { status } = await BarCodeScanner.requestPermissionsAsync()
		setPermit(status === 'granted')
	}

	function handleCodeScanned({ data }) {
		setScannedCode(true)
		// eslint-disable-next-line no-console
		console.log(data)
		// alert(data)
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
			<Text>
				{scannedCode && <Button title="Tap to Scan Again" onPress={() => setScannedCode(false)} />}
			</Text>
		</SafeAreaView>
	)
}

export default HomeScreen
