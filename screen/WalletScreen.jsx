import React, { useEffect } from 'react'
import {
	SafeAreaView, StyleSheet, Text, View,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getUserWallet } from './walletHelper'

const styles = StyleSheet.create({
	text: {
		fontSize: 20,
		color: 'white',
	},
})

function WalletScreen() {
	const dispatch = useDispatch()
	const wallets = useSelector((globalState) => globalState.wallet)
	/* const wallets = [
		{
			id: 1,
			store_id: 1,
			reward_threshold: 10,
			reward: '1 free coffee',
		},
		{
			id: 1,
			store_id: 3,
			reward_threshold: 10,
			reward: '20% off',
		},
	] */

	useEffect(() => {
		getUserWallet(dispatch)
	}, [])

	return (
		<SafeAreaView>
			{ wallets && wallets.map((wallet) => (
				<View style={{
					marginTop: 10,
					marginRight: 15,
					marginLeft: 15,
					borderRadius: 10,
					height: 230,
					padding: 10,
					shadowColor: 'blue',
					backgroundColor: 'lightgray',
				}}
				>
					<Text style={styles.text}>
						 { wallet.name}
					</Text>

					<Text>{ wallet.reward}</Text>
				</View>
			))}
		</SafeAreaView>
	)
}

export default WalletScreen
