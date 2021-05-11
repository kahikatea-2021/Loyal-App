/* eslint-disable global-require */
import React, { useState } from 'react'
import { useSelector, useDispatch, useLayoutEffect } from 'react-redux'
import {
	SafeAreaView, StyleSheet, Text, View, Alert, Modal, Pressable, Image, ImageBackground,
} from 'react-native'

import request from 'superagent'

import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AuthError } from 'expo-auth-session'
import { getRandomBytes } from 'expo-random'
import { resetCard } from './stampHelper'
import { getUserCard } from '../store/actions/cardActions'

const styles = StyleSheet.create({
	loyaltyCard: {
		padding: 15,
		margin: 20,
		borderRadius: 20,
		backgroundColor: '#87878a',
		shadowColor: 'rgba(0, 0, 0, 0.75)',
		shadowOffset: {
			width: 5,
			height: 10,
		},
		shadowOpacity: 0.5,
		shadowRadius: 4,
		elevation: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	loyaltyCardRow: {
		flexShrink: 1, flexDirection: 'row', height: 70,

	},
	defaultStamp: {
		flex: 1, margin: 5, borderRadius: 10,
	},
	unstamped: {
		backgroundColor: 'black',
	},
	stamped: {
		backgroundColor: 'white',
	},
	redeemPlaceholder: {
		margin: 20,
		backgroundColor: '#e0e0e0',
		borderRadius: 20,
		padding: 35,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,

	},
	redeemPlaceholderText: {
		color: '#8d8d8d',
	},
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 35,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	modalFinalView: {
		flex: 0.8,
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 35,
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: 'rgba(0, 0, 0, 0.75)',
		shadowOffset: {
			width: 5,
			height: 10,
		},
		shadowOpacity: 0.5,
		shadowRadius: 4,
		elevation: 5,
		borderColor: 'white',
		borderWidth: 4,

	},
	button: {
		borderRadius: 20,
		padding: 10,
		margin: 20,
		elevation: 2,
	},
	buttonOpen: {
		backgroundColor: '#1282e9',
	},
	buttonClose: {
		backgroundColor: '#1282e9',
	},
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	modalText: {
		marginBottom: 15,
		textAlign: 'center',
	},
	spacer: {
		flex: 1,
	},
	halfSpacer: {
		flex: 0.3,
	},
	stampIcon: {
		flexShrink: 1, width: 60, height: 60, margin: 5,
	},
	cardHeader: {
		flexDirection: 'row', height: 70,
	},
	storeInfo: {
		flex: 4,
	},
	cardTitle: {
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'left',
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
	},
	cardDetails: {
		color: 'white',
		textAlign: 'left',
		marginTop: 5,
	},
	cardLogo: {
		flex: 1.5, width: 60, height: 60,
	},
	closeIcon: {
		padding: 15,
		// margin: 20,
		borderRadius: 20,
		elevation: 5,
		color: 'red',
		opacity: 0.5,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		top: 5,
	},
	redeemModalButtons: {
		flexDirection: 'row',
	},
	notYetButton: {
		backgroundColor: 'grey',
		borderRadius: 20,
		padding: 10,
		margin: 20,
		elevation: 2,
	},
	notYetbuttonClose: {
		backgroundColor: 'grey',

	},
	congratulationsImage: {
		width: 300,
		height: 19,
		justifyContent: 'center',
		top: 10,
		marginBottom: 20,
	},
	redeemIcon: {
		width: 200,
		height: 200,
		justifyContent: 'center',
		margin: 50,
	},
})

const Spacer = () => (
	<View style={styles.spacer} />
)

const HalfSpacer = () => (
	<View style={styles.halfSpacer} />
)

function CardScreen ({ navigation }) {
	const card = useSelector((globalState) => globalState.card)
	const {
		shouldRedeem, stampCount, cardId,
	} = card

	const [modalVisible, setModalVisible] = useState(false)
	const [finalModalVisible, setFinalModalVisible] = useState(false)
	const dispatch = useDispatch()

	const handleLongPress = () => {
		setModalVisible(true)
	}

	function handleUserHasReedem() {
		resetCard(dispatch, cardId)
		setFinalModalVisible(!finalModalVisible)
	}

	const handleFinalPress = () => {
		setTimeout(() => {
			handleUserHasReedem()
		}, 150000)
		setModalVisible(!modalVisible)
		setFinalModalVisible(true)
	}

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
			<Ionicons name="chevron-back" size={50} style={[styles.closeIcon]} onPress={() => { navigation.navigate('BottomNavigation') }} />
			<HalfSpacer />
			<View style={[styles.loyaltyCard]}>
				<View style={[styles.cardHeader]}>
					<View style={[styles.storeInfo]}>
						<Text style={[styles.cardTitle]}>Mutual Friends</Text>
						<Text style={[styles.cardDetails]}>
							{card.address}
							{'\n'}
							@mutualfriendsespresso
						</Text>
					</View>
					<Image style={[styles.cardLogo]} source={require('../assets/mutual-friends.png')} />
				</View>
				<View style={[styles.loyaltyCardRow]}>
					<Image
						style={[styles.stampIcon]}
						source={(stampCount >= 1)
							? require('../assets/stampUp.png') : require('../assets/stampDown.png')}
					/>
					<Image
						style={[styles.stampIcon]}
						source={(stampCount >= 2)
							? require('../assets/stampUp.png') : require('../assets/stampDown.png')}
					/>
					<Image
						style={[styles.stampIcon]}
						source={(stampCount >= 3)
							? require('../assets/stampUp.png') : require('../assets/stampDown.png')}
					/>
					<Image
						style={[styles.stampIcon]}
						source={(stampCount >= 4)
							? require('../assets/stampUp.png') : require('../assets/stampDown.png')}
					/>
					<Image
						style={[styles.stampIcon]}
						source={(stampCount >= 5)
							? require('../assets/stampUp.png') : require('../assets/stampDown.png')}
					/>
				</View>
				<View style={[styles.loyaltyCardRow]}>
					<Image
						style={[styles.stampIcon]}
						source={(stampCount >= 6)
							? require('../assets/stampUp.png') : require('../assets/stampDown.png')}
					/>
					<Image
						style={[styles.stampIcon]}
						source={(stampCount >= 7)
							? require('../assets/stampUp.png') : require('../assets/stampDown.png')}
					/>
					<Image
						style={[styles.stampIcon]}
						source={(stampCount >= 8)
							? require('../assets/stampUp.png') : require('../assets/stampDown.png')}
					/>
					<Image
						style={[styles.stampIcon]}
						source={(stampCount >= 9)
							? require('../assets/stampUp.png') : require('../assets/stampDown.png')}
					/>
					<Image
						style={[styles.stampIcon]}
						source={(stampCount >= 10)
							? require('../assets/stampUp.png') : require('../assets/stampDown.png')}
					/>
				</View>
			</View>
			<HalfSpacer />

			{(shouldRedeem)
				? (
					<View style={styles.centeredView}>

						<Modal
							animationType="fade"
							transparent
							visible={finalModalVisible}
							onRequestClose={() => {
								Alert.alert('Modal has been closed.')
								setFinalModalVisible(!finalModalVisible)
							}}
						>
							<View style={styles.centeredView}>
								<View style={styles.modalFinalView}>
									<Image style={styles.congratulationsImage} source={require('../assets/congratulations-new.png')} />
									<HalfSpacer />
									<Image style={styles.redeemIcon} source={require('../assets/redeemIcon.png')} />
									<Text style={styles.modalText}>
										Present this to your barista to redeem a free coffee.
									</Text>
									<HalfSpacer />
									<Pressable
										style={[styles.notYetButton, styles.notYetButtonClose]}
										onPress={handleUserHasReedem}
									>
										<Text style={styles.textStyle}>Complete transaction</Text>
									</Pressable>
								</View>
							</View>
						</Modal>

						<Modal
							animationType="slide"
							transparent
							visible={modalVisible}
							onRequestClose={() => {
								Alert.alert('Modal has been closed.')
								setModalVisible(!modalVisible)
							}}
						>
							<View style={styles.centeredView}>
								<View style={styles.modalView}>
									<Text style={styles.modalText}>
										Are you sure you would like to redeem now?
										Redeeming will clear your stamp balance.
									</Text>
									<View style={styles.redeemModalButtons}>
										<Pressable
											style={[styles.button, styles.buttonClose]}
											onPress={handleFinalPress}
										>
											<Text style={styles.textStyle}>Yes! Redeem now</Text>
										</Pressable>
										<Pressable
											style={[styles.notYetButton, styles.notYetButtonClose]}
											onPress={() => {
												setModalVisible(!modalVisible)
											}}
										>
											<Text style={styles.textStyle}>Not yet</Text>
										</Pressable>
									</View>
								</View>
							</View>
						</Modal>
						<Pressable
							style={({ pressed }) => [
								{
									width: '90%',
									margin: 20,
									borderRadius: 20,
									padding: 35,
									alignItems: 'center',
									shadowColor: '#000',
									shadowOffset: {
										width: 0,
										height: 2,
									},
									shadowOpacity: 0.25,
									shadowRadius: 4,
									elevation: 5,
									opacity: pressed ? 0.95 : 0.6,
									backgroundColor: pressed ? '#1282e9' : '#49378E',
								},
							]}
							onLongPress={handleLongPress}
						>
							<Text style={styles.textStyle}>Hold to redeem</Text>
						</Pressable>
					</View>
				)
				: (
					<View style={[styles.redeemPlaceholder]}>
						<Text style={[styles.redeemPlaceholderText]}>
							Collect ten stamps to claim a free coffee
						</Text>

					</View>
				)}
			<Spacer />
		</SafeAreaView>
	)
}

export default CardScreen
