import React, { useState, useEffect, useLayoutEffect } from 'react'
import {
	StyleSheet, Image, Text, View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler'
import { getStoreDetail } from './storeHelper'

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
	wait: {
		width: 290,
		height: 288,
		margin: 50,
		alignItems: 'center',
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

function StoreDetailScreen ({ navigation }) {
	const dispatch = useDispatch()
	const store = useSelector((state) => state.store)

	useEffect(() => {
		getStoreDetail(dispatch)
	}, [])

	useLayoutEffect(() => {
		navigation.setOptions({
			title: 'Store',
			headerStyle: {
				backgroundColor: '#49378E',
				shadowColor: '#fff',
			},
		})
	})
	// const [cardStatus, setCardStatus] = useState(store.cardId)
	console.log('storestatus:', store.address)
	if (!store.address) {
		return (
			<Image
				style={styles.wait}
				source={require('../assets/testTitleImage.png')}
			/>
		)
	}
	console.log('storeaddress:', store.address)
	if (!store.cardId) navigation.navigate('StoreCardCreator')
	// if (!cardStatus) navigation.navigate('StoreCardCreator')
	// if (cardStatus >= 1) { console.log(store.cardId) }
	{
		return (
			<SafeAreaView style={{
				flex: 1, backgroundColor: '#49378E',
			}}
			>
				<ScrollView style={styles.container}>
					{store
						&& (
							<>
								<Image
									style={styles.logo}
									source={{
										uri: `${store.qrCode}`,
									}}
								/>
								<Text style={styles.textMain}>
									Welcome to
									{' '}
									{store.name}
									{'\n'}
								</Text>
								<Text style={styles.textSub}>Scan the code to save for a free coffee</Text>

							</>
						)}

				</ScrollView>
			</SafeAreaView>
		)
	}
}

export default StoreDetailScreen
