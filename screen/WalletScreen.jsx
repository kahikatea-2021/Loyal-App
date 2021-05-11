import {
	TouchableHighlight,
	TouchableOpacity,
	SafeAreaView,
	FlatList,
	StyleSheet,
	Text,
	View,
	ScrollView,
	Image,
	ImageBackground,
	Pressable,
} from 'react-native'
import Swipeable from 'react-native-swipeable-row'
// import Swipeable from 'react-native-gesture-handler/Swipeable'
import { Feather } from '@expo/vector-icons'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'
import { useSelector, useDispatch } from 'react-redux'
import * as Haptics from 'expo-haptics'
import { getUserCard } from '../store/actions/cardActions'
import { deleteCardFromWallet, getUserWallet } from './walletHelper'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 20,
	},
	listItem: {
		height: 220,
		alignItems: 'center',
		justifyContent: 'center',
		// backgroundColor: '#49378E',
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
	console.log(wallet)

	function handleCardDelete(cardId) {
		deleteCardFromWallet(cardId, dispatch)
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
	}

	return (
		<ScrollView>
			<SafeAreaView style={styles.container}>
				{wallet
					&& wallet.map((card) => (
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
									onPress={() => { handleCardDelete() }}
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
											/10
										</Text>
									</View>
								</Pressable>
							</View>
						</Swipeable>
					))}
			</SafeAreaView>
		</ScrollView>
	)
}
// function WalletScreen() {
// 	function renderRightActions(progress, dragX) {
// 		const trans = dragX.interpolate({
// 			inputRange: [0, 50, 100, 101],
// 			outputRange: [-20, 0, 0, 1],
// 		})
// 		return (
// 			<RectButton style={styles.leftAction} onPress={() => {}}>
// 				<Animated.Text>
// 					Archive
// 				</Animated.Text>
// 			</RectButton>
// 		)
// 	}
// 	return (
// 		<Swipeable renderRightActions={renderRightActions}>
// 			<Text>Card</Text>
// 		</Swipeable>
// 	  )
// }

export default WalletScreen
