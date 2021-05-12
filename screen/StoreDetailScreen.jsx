import React, { useEffect, useLayoutEffect } from 'react'
import {
	StyleSheet, Image, Text, View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler'
import { getStoreDetail } from './storeHelper'
import LoadingComponent from '../components/LoadingComponent'

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
	qr: {
		width: 290,
		height: 288,
		alignSelf: 'center',
		margin: 10,
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
		fontWeight: 'bold',
		opacity: 0.8,
		textDecorationLine: 'underline',
	},

	textSub: {
		fontSize: 16,

		textAlign: 'center',
		color: '#FCFAF1',
		opacity: 0.8,

	},
	border: {
		backgroundColor: '#8977CE',
		padding: 20,
		margin: 30,
		borderRadius: 20,
	},
	loyalLogo: {
		width: 170,
		height: 205,
		alignSelf: 'center',
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
	if (!store.cardId) navigation.navigate('StoreCardCreator')

	{
		return (
			<SafeAreaView style={{
				flex: 1, backgroundColor: '#49378E',
			}}
			>
				<LoadingComponent>
					<ScrollView style={styles.container}>
						{store
							&& (
								<>
									<Image
										style={styles.loyalLogo}
										source={require('../assets/testIcon.png')}
									/>
									<View style={styles.border}>
										<Text style={styles.textMain}>
											{store.name}

										</Text>
										<Image
											style={styles.qr}
											source={{
												uri: `${store.qrCode}`,
											}}
										/>
										<Text style={styles.textSub}>Scan the code to record your stamps</Text>
									</View>
								</>
							)}
					</ScrollView>
				</LoadingComponent>
			</SafeAreaView>
		)
	}
}

export default StoreDetailScreen
