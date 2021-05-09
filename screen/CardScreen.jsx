/* eslint-disable global-require */
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	SafeAreaView, StyleSheet, Text, View, Alert, Modal, Pressable, Image,
} from 'react-native'
import request from 'superagent'
import { getUserCard } from '../store/actions/cardActions'

const styles = StyleSheet.create({
	loyaltyCard: {
		padding: 15,
		margin: 20,
		borderRadius: 20,
		backgroundColor: '#49378E',
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
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	buttonOpen: {
		backgroundColor: 'blue',
	},
	buttonClose: {
		backgroundColor: '#2196F3',
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
})

const Spacer = () => (
	<View style={styles.spacer} />
)

const HalfSpacer = () => (
	<View style={styles.halfSpacer} />
)

function CardScreen() {
	const card = useSelector((globalState) => globalState.card)
	const { shouldRedeem } = card
	const { stampCount } = card
	const [modalVisible, setModalVisible] = useState(false)
	const dispatch = useDispatch()

	const handleLongPress = () => {
		setModalVisible(true)
	}

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Spacer />
			<View style={[styles.loyaltyCard]}>
				<View style={[styles.cardHeader]}>
					<View style={[styles.storeInfo]}>
						<Text style={[styles.cardTitle]}>Mutual Friends</Text>
						<Text style={[styles.cardDetails]}>
							12 Morgan Street, Newmarket
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
							visible={modalVisible}
							onRequestClose={() => {
								Alert.alert('Modal has been closed.')
								setModalVisible(!modalVisible)
							}}
						>
							<View style={styles.centeredView}>
								<View style={styles.modalView}>
									<Text style={styles.modalText}>
										Show this to your barista to redeem
										your free coffee.
									</Text>
									<Pressable
										style={[styles.button, styles.buttonClose]}
										onPress={() => {
											request.patch('https://effc9dad5017.ngrok.io/api/v1/card')
												.set({
													Accept: 'application/json',
												})
												.send({
													userId: 'abc123',
													storeId: 1,
												})
												.then((res) => {
													dispatch(getUserCard(res.body))
													// shouldRedeem = false
													// dispatch(getUserCard(res.body))
												})
											setModalVisible(!modalVisible)
										}}
									>
										<Text style={styles.textStyle}>Close</Text>
									</Pressable>
								</View>
							</View>
						</Modal>
						<Pressable
							style={({ pressed }) => [
								{
									borderRadius: 20,
									padding: 10,
									elevation: 2,
									opacity: pressed ? 0.5 : 1,
									backgroundColor: pressed ? 'red' : 'orange',
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
