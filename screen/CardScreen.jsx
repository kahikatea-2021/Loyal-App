/* eslint-disable global-require */
import React, { useState } from 'react'
import { useSelector, useDispatch, useLayoutEffect } from 'react-redux'
import {
	SafeAreaView, StyleSheet, Text, View, Alert, Modal, Pressable, Image,
} from 'react-native'

import request from 'superagent'

import { TouchableOpacity } from 'react-native-gesture-handler'
import { AuthError } from 'expo-auth-session'
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
		flexDirection: 'row', height: 70,

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
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
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
		width: 60, height: 60, margin: 5,
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

	done: {
		padding: 15,
		margin: 20,
		borderRadius: 20,
		backgroundColor: '#3C97EA',
		elevation: 5,
		alignItems: 'center',
		justifyContent: 'center',
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
})

const Spacer = () => (
	<View style={styles.spacer} />
)

const HalfSpacer = () => (
	<View style={styles.halfSpacer} />
)

function CardScreen ({ navigation }) {
	const card = useSelector((globalState) => globalState.card)
	const { shouldRedeem, storeId, stampCount } = card

	const [modalVisible, setModalVisible] = useState(false)
	const [finalModalVisible, setFinalModalVisible] = useState(false)
	const dispatch = useDispatch()

	const handleLongPress = () => {
		setModalVisible(true)
	}

	function handleUserHasReedem () {
		resetCard(dispatch, storeId)
		// setModalVisible(!modalVisible)
		setFinalModalVisible(!finalModalVisible)
	}

	const handleFinalPress = () => {
		setModalVisible(!modalVisible)
		setFinalModalVisible(true)
	}

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
			<Spacer />
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
							animationType="slide"
							transparent
							visible={finalModalVisible}
							onRequestClose={() => {
								Alert.alert('Modal has been closed.')
								setFinalModalVisible(!finalModalVisible)
							}}
						>
							<View style={styles.centeredView}>
								<View style={styles.modalFinalView}>
									<Text style={styles.modalText}>
										Show this to barrista to redeem your free coffee.
									</Text>
									<Pressable
										style={[styles.button, styles.buttonClose]}
										onPress={handleUserHasReedem}
									>
										<Text style={styles.textStyle}>Done</Text>
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
			<TouchableOpacity style={[styles.done]} onPress={() => { navigation.navigate('BottomNavigation') }}>
				<Text>Done</Text>
			</TouchableOpacity>
			<Spacer />
		</SafeAreaView>
	)
}

export default CardScreen
