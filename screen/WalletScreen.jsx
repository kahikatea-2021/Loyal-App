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
import { getUserCard } from '../store/actions/cardActions'
import { getUserWallet } from './walletHelper'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 20,
	},
	listItem: {
		height: 220,
		alignItems: 'stretch',
		justifyContent: 'center',
		marginLeft: 20,
		marginRight: 20,
	},
	rightSwipeItem: {
		flex: 1,
		justifyContent: 'center',
		paddingLeft: 27,
		borderTopLeftRadius: 15,
		borderBottomLeftRadius: 15,
		paddingRight: 10,
	},
	leftSwipeItem: {
		flex: 1,
		alignItems: 'flex-end',
		justifyContent: 'center',
		paddingRight: 20,
		backgroundColor: '#8977CE',
	},
	cardBg: {
		width: '100%',
		height: '100%',
		alignItems: 'center',
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

	// define a variable - if it is true show cards, if not then say "You have no cards"

	return (
		<ScrollView>
			<SafeAreaView style={styles.container}>
				{!wallet ? (
					<View>
						<Text>Your shit is empty</Text>
					</View>
				) : wallet
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
								>
									<Text>
										<Feather name="trash-2" size={24} color="#FCFAF1" />
									</Text>
								</TouchableOpacity>,
							]}
							onRightButtonsOpenRelease={onOpen}
							onRightButtonsCloseRelease={onClose}
						>
							<View style={[styles.listItem, { backgroundColor: '#FCFAF1' }]}>
								<TouchableOpacity
									activeOpacity={1}
									onPress={() => {
										navigation.navigate('Card')
									}}
								>
									<Text>{card.storeName}</Text>
									<Text>{card.stampCount}</Text>
									<ImageBackground
										style={styles.cardBg}
										source={require('../assets/walletCardTest.png')}
									/>
								</TouchableOpacity>
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
