import React, { useState, useEffect } from 'react'
import {
	 StyleSheet, Image,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import consume from '../consume'

const styles = StyleSheet.create({
	container: {
		paddingTop: 50,
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
})

function StoreDetailScreen() {
	const [store, setStore] = useState()
	useEffect(() => {
		consume('https://effc9dad5017.ngrok.io/api/v1/stores/1').then((res) => {
			setStore(res.body)
		})
	}, [])

	return (
		<SafeAreaView>
			{store
			&& (

				<Image
					style={styles.logo}
					source={{
						uri: `${store.qrCode}`,
					}}
				/>
			)}
		</SafeAreaView>
	)
}

export default StoreDetailScreen
