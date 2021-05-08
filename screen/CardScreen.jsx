import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {
	SafeAreaView, StyleSheet, Text, View, Alert, Modal, Pressable,
} from 'react-native'

const styles = StyleSheet.create({
	loyaltyCard: {
		flex: 4,
		padding: 20,
	},
	loyaltyCardRow: {
		flexDirection: 'row', flex: 1,
	},
	defaultStamp: {
		flex: 1, borderRadius: 10, borderWidth: 3, borderColor: 'red',
	},
	unstamped: {
		backgroundColor: 'black',
	},
	stamped: {
		backgroundColor: 'white',
	},
	separator: {
		marginVertical: 8,
		borderBottomColor: '#737373',
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	redeemPlaceholder: {
		backgroundColor: '#C3C6CA', flex: 1, borderRadius: 10, borderWidth: 3, borderColor: '#C3C6CA',
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
})

const Separator = () => (
	<View style={styles.separator} />
)

function CardScreen() {
	const card = useSelector((globalState) => globalState.card)
	const { stampCount } = card
	const [modalVisible, setModalVisible] = useState(false)
	const handleLongPress = () => {
		setModalVisible(true)
	}

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={[styles.loyaltyCard]}>
				<View style={[styles.loyaltyCardRow]}>
					<View style={[styles.defaultStamp, (stampCount >= 1)
						? styles.stamped : styles.unstamped]}
					/>
					<View style={[styles.defaultStamp, (stampCount >= 2)
						? styles.stamped : styles.unstamped]}
					/>
					<View style={[styles.defaultStamp, (stampCount >= 3)
						? styles.stamped : styles.unstamped]}
					/>
					<View style={[styles.defaultStamp, (stampCount >= 4)
						? styles.stamped : styles.unstamped]}
					/>
					<View style={[styles.defaultStamp, (stampCount >= 5)
						? styles.stamped : styles.unstamped]}
					/>
				</View>
				<View style={[styles.loyaltyCardRow]}>
					<View style={[styles.defaultStamp, (stampCount >= 6)
						? styles.stamped : styles.unstamped]}
					/>
					<View style={[styles.defaultStamp, (stampCount >= 7)
						? styles.stamped : styles.unstamped]}
					/>
					<View style={[styles.defaultStamp, (stampCount >= 8)
						? styles.stamped : styles.unstamped]}
					/>
					<View style={[styles.defaultStamp, (stampCount >= 9)
						? styles.stamped : styles.unstamped]}
					/>
					<View style={[styles.defaultStamp, (stampCount >= 10)
						? styles.stamped : styles.unstamped]}
					/>
				</View>
			</View>
			<Separator />
			{(stampCount === 10)
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
										onPress={() => setModalVisible(!modalVisible)}
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
						<Text>
							Collect ten stamps to claim a free coffee
						</Text>
					</View>
				)}
		</SafeAreaView>
	)
}

export default CardScreen
