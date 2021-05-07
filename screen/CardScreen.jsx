import React from 'react'
import { useSelector } from 'react-redux'
import {
	SafeAreaView, StyleSheet, Button, Text, View,
} from 'react-native'

const styles = StyleSheet.create({
	loyaltyCard: {
		flex: 4,
		padding: 20,
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
	redeemButton: {
		backgroundColor: 'yellow', flex: 1, borderRadius: 10, borderWidth: 3, borderColor: 'red',
	},
})

const Separator = () => (
	<View style={styles.separator} />
)

function CardScreen() {
	const card = useSelector((globalState) => globalState.card)
	const finalCount = card.stampCount

	return (
		<SafeAreaView style={{ flex: 1 }}>

			<View style={{ flex: 2 }}>
				<Text>
					Card name:
					{card.name}
				</Text>
				<Text>
					Stamp:
					{finalCount}
				</Text>
				<Text>
					Should redeem:
					{card.shouldRedeem}
				</Text>
			</View>

			<Separator />

			<View style={[styles.loyaltyCard]}>
				<View style={{
					flexDirection: 'row', flex: 1,
				}}
				>
					<View style={[styles.defaultStamp, (finalCount >= 1)
						? styles.stamped : styles.unstamped]}
					/>
					<View style={[styles.defaultStamp, (finalCount >= 2)
						? styles.stamped : styles.unstamped]}
					/>
					<View style={[styles.defaultStamp, (finalCount >= 3)
						? styles.stamped : styles.unstamped]}
					/>
					<View style={[styles.defaultStamp, (finalCount >= 4)
						? styles.stamped : styles.unstamped]}
					/>
					<View style={[styles.defaultStamp, (finalCount >= 5)
						? styles.stamped : styles.unstamped]}
					/>
				</View>

				<View style={{
					flexDirection: 'row', flex: 1,
				}}
				>
					<View style={[styles.defaultStamp, (finalCount >= 6)
						? styles.stamped : styles.unstamped]}
					/>
					<View style={[styles.defaultStamp, (finalCount >= 7)
						? styles.stamped : styles.unstamped]}
					/>
					<View style={[styles.defaultStamp, (finalCount >= 8)
						? styles.stamped : styles.unstamped]}
					/>
					<View style={[styles.defaultStamp, (finalCount >= 9)
						? styles.stamped : styles.unstamped]}
					/>
					<View style={[styles.defaultStamp, (finalCount >= 10)
						? styles.stamped : styles.unstamped]}
					/>
				</View>
			</View>

			<Separator />

			<View style={[styles.redeemButton]}>
				<Button
					// onPress={onPressLearnMore}
					title="REDEEM"
					color="#841584"
					accessibilityLabel="Learn more about this purple button"
				/>
			</View>

		</SafeAreaView>
	)
}

export default CardScreen
