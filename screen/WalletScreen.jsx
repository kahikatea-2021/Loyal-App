import {
	TouchableOpacity,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	ScrollView,
	Pressable,
	RefreshControl,
} from 'react-native'
import Swipeable from 'react-native-swipeable-row'
import { Feather } from '@expo/vector-icons'
import React, { useEffect, useLayoutEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as Haptics from 'expo-haptics'

import { deleteCardFromWallet, getUserWallet } from './walletHelper'
import LoadingComponent from '../components/LoadingComponent'
import { setStampCard } from './stampHelper'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 20,
	},
	listItem: {
		height: 220,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'yellow',
	},
	cardItem: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#49378E',
		padding: 20,
	},
	cardNameArea: {
		flex: 7,
		justifyContent: 'flex-end',
		paddingBottom: 20,
		borderTopLeftRadius: 6,
		borderBottomLeftRadius: 6,
		backgroundColor: '#FCFAF1',
	},
	cardCountArea: {
		flex: 3,
		alignItems: 'flex-end',
		borderTopRightRadius: 6,
		borderBottomRightRadius: 6,
		backgroundColor: '#FCFAF1',
	},
	storeNameText: {
		fontSize: 24,
		paddingLeft: 20,
		fontWeight: 'bold',
	},
	stampCountText: {
		fontSize: 32,
		paddingTop: 8,
		paddingRight: 10,
		fontWeight: 'bold',
	},
	rightSwipeItem: {
		flex: 1,
		justifyContent: 'center',
		paddingLeft: 27,
		borderTopLeftRadius: 25,
		borderBottomLeftRadius: 25,
		paddingRight: 10,
	},
	leftSwipeItem: {
		flex: 1,
		alignItems: 'flex-end',
		justifyContent: 'center',
		paddingRight: 20,
		backgroundColor: '#8977CE',
	},
	spacer: {
		flex: 1,
	},
	halfSpacer: {
		flex: 0.3,
	},
})

function WalletScreen ({ navigation, onOpen, onClose }) {
	const wallet = useSelector((state) => state.wallet)
	const dispatch = useDispatch()
	useLayoutEffect(() => {
		navigation.setOptions({
			title: 'My Wallet',
			headerStyle: {
				backgroundColor: '#49378E',
				shadowColor: '#fff',
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
				<SafeAreaView style={styles.container}>
					{!wallet ? (
						<View>
							<Text>Your shit is empty</Text>
						</View>
					) : wallet
				&& wallet.map((card) => (
					<View key={card.id}>
						<Swipeable
							leftContent={(
								<View style={styles.leftSwipeItem}>
									<Text />
								</View>
							)}
							rightButtons={[
								<TouchableOpacity
									style={[
										styles.rightSwipeItem,
										{ backgroundColor: '#B80F0F' },
									]}
									onPress={() => { handleCardDelete(card.cardId) }}
								>
									<Text>
										<Feather name="trash-2" size={24} color="#FCFAF1" />
									</Text>
								</TouchableOpacity>,
							]}
							onRightButtonsOpenRelease={onOpen}
							onRightButtonsCloseRelease={onClose}
						>
							<View style={styles.listItem}>
								<Pressable
									onPress={() => {
										setStampCard(card, dispatch)
										navigation.navigate('Card')
									}}
									style={styles.cardItem}
								>
									<View style={styles.cardNameArea}>
										<Text style={styles.storeNameText}>{card.storeName}</Text>
									</View>
									<View style={styles.cardCountArea}>
										<Text style={styles.stampCountText}>
											{card.stampCount}
											/
											{' '}
											{ card.threshold}
										</Text>
									</View>
								</Pressable>
							</View>
						</Swipeable>
					</View>
				))}
				</SafeAreaView>
			</ScrollView>
		</LoadingComponent>
	)
}

export default WalletScreen
