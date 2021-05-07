import React from 'react'
import { useSelector } from 'react-redux'
import {
	SafeAreaView, StyleSheet, Text, View,
} from 'react-native'

const styles = StyleSheet.create({
	container: {
		flex: 4,
		padding: 20,
	},
	default: {
		flex: 1, borderRadius: 10, borderWidth: 3, borderColor: 'red',
	},
	unstamped: {
		backgroundColor: 'black',
	},
	stamped: {
		backgroundColor: 'white',
	},
})

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

			<View style={[styles.container]}>
				<View style={{
					flexDirection: 'row', flex: 1,
				}}
				>
					<View style={[styles.default, (finalCount >= 1) ? styles.stamped : styles.unstamped]} />
					<View style={[styles.default, (finalCount >= 2) ? styles.stamped : styles.unstamped]} />
					<View style={[styles.default, (finalCount >= 3) ? styles.stamped : styles.unstamped]} />
					<View style={[styles.default, (finalCount >= 4) ? styles.stamped : styles.unstamped]} />
					<View style={[styles.default, (finalCount >= 5) ? styles.stamped : styles.unstamped]} />
				</View>

				<View style={{
					flexDirection: 'row', flex: 1,
				}}
				>
					<View style={[styles.default, (finalCount >= 6) ? styles.stamped : styles.unstamped]} />
					<View style={[styles.default, (finalCount >= 7) ? styles.stamped : styles.unstamped]} />
					<View style={[styles.default, (finalCount >= 8) ? styles.stamped : styles.unstamped]} />
					<View style={[styles.default, (finalCount >= 9) ? styles.stamped : styles.unstamped]} />
					<View style={[styles.default, (finalCount >= 10) ? styles.stamped : styles.unstamped]} />
				</View>
			</View>

		</SafeAreaView>
	)
}

export default CardScreen
