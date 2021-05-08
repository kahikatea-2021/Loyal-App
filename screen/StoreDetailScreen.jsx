import React, { useState, useEffect, useLayoutEffect } from 'react'
import {
	 StyleSheet, Image, Text, View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import consume from '../consume'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 0,
		backgroundColor: '#49378E',
	},
	tinyLogo: {
		width: 50,
		height: 50,
	},
	logo: {
		width: 290,
		height: 288,
		margin: 50,
	},
	textMain: {
		fontSize: 30,
		textAlign: 'center',
		color: '#FCFAF1',
	},
	textSub: {
		textAlign: 'center',
		color: '#FCFAF1',
	},
})

function StoreDetailScreen({ navigation }) {
	const [store, setStore] = useState({
		id: 1,
		name: 'Rocket Cafe',
		phone: 6491231234,
		address: '15 Morgan Street, Newmarket, Auckland 1023',
		qrCode: 'data:image/png;base64,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',
	})
	useEffect(() => {
		// consume('https://effc9dad5017.ngrok.io/api/v1/stores/1').then((res) => {
		// setStore(res.body)
		// })
	}, [])

	useLayoutEffect(() => {
		navigation.setOptions({
			title: '',
			headerStyle: {
				backgroundColor: '#49378E',
				shadowColor: 'transparent',
			},
		})
	})

	return (
		<SafeAreaView style={{
			 flex: 1, backgroundColor: '#49378E',
		}}
		>
			<View style={styles.container}>
				{store
			&& (

				<Image
					style={styles.logo}
					source={{
						uri: `${store.qrCode}`,
					}}
				/>
			)}
				<Text style={styles.textMain}>
					Welcome to
					{' '}
					{store.name}
					{'\n'}
				</Text>
				<Text style={styles.textSub}>Scan the code to save for a free coffee</Text>
			</View>
		</SafeAreaView>
	)
}

export default StoreDetailScreen
