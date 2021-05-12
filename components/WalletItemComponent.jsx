import React from 'react'
import {
	Pressable, StyleSheet, Text, View,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { setStampCard } from '../screen/stampHelper'

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
		paddingTop: 20,
		paddingLeft: 20,
		paddingRight: 20,
		paddingBottom: 0,
	},
	cardNameArea: {
		flex: 7,
		justifyContent: 'flex-end',
		paddingBottom: 20,
		borderTopLeftRadius: 15,
		borderBottomLeftRadius: 15,
		backgroundColor: '#4D4557',
	},
	cardCountArea: {
		flex: 3,
		alignItems: 'flex-end',
		borderTopRightRadius: 15,
		borderBottomRightRadius: 15,
		backgroundColor: '#4D4557',
	},
	storeNameText: {
		color: '#fcfaf1',
		opacity: 0.8,
		fontSize: 24,
		paddingLeft: 20,
		fontWeight: 'bold',
	},
	stampCountText: {
		color: '#fcfaf1',
		opacity: 0.8,
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

function WalletItemComponent ({ card, onItemPress }) {
	return (
		<View style={styles.listItem}>
			<Pressable
				/* onPress={() => {
					//
				}} */
				onPress={() => { onItemPress(card) }}
				style={styles.cardItem}
			>
				<View style={styles.cardNameArea}>
					<Text style={styles.storeNameText}>{card.storeName}</Text>
				</View>
				<View style={styles.cardCountArea}>
					<Text style={styles.stampCountText}>
						{card.stampCount}
						/
						{10}
					</Text>
				</View>
			</Pressable>
		</View>
	)
}

export default WalletItemComponent
