import React, { useEffect, useLayoutEffect } from 'react'

import {
	RefreshControl, SafeAreaView,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import * as Haptics from 'expo-haptics'
import { ScrollView } from 'react-native-gesture-handler'
import LoadingComponent from '../components/LoadingComponent'
import { deleteCardFromWallet, getUserWallet } from '../screen/walletHelper'
import SwipeableItem from '../components/SwipeableItem'
import WalletItemComponent from '../components/WalletItemComponent'
import { setStampCard } from '../screen/stampHelper'

function WalletScreen({ navigation }) {
	const wallet = useSelector((state) => state.wallet)
	const dispatch = useDispatch()
	useLayoutEffect(() => {
		navigation.setOptions({
			title: 'My Wallet',
			headerStyle: {
				backgroundColor: '#49378E',
				shadowColor: '#8977CE',
			},
		})
	}, [navigation])
	useEffect(() => {
		getUserWallet(dispatch)
	}, [])

	const [refreshing, setRefreshing] = React.useState(false)
	const onRefresh = React.useCallback(() => {
		setRefreshing(true)
		getUserWallet(dispatch).then(() => setRefreshing(false))
	}, [])
	function handleCardDelete (cardId) {
		deleteCardFromWallet(cardId, dispatch)
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
	}

	function onDispatch(card) {
		setStampCard(card, dispatch)
		navigation.navigate('Card')
	}
	return (
		<LoadingComponent>
			<ScrollView
				refreshControl={(
					<RefreshControl
						tintColor="#FCFAF1"
						refreshing={refreshing}
						onRefresh={onRefresh}
					/>
				)}
			>
				{
					wallet && wallet.map((card) => (
						<SwipeableItem handleRight={() => handleCardDelete(card.cardId)} key={card.cardId}>
							<WalletItemComponent card={card} onItemPress={onDispatch} navigation={navigation} />
						</SwipeableItem>
					))
				}
			</ScrollView>
		</LoadingComponent>
	)
}

export default WalletScreen
