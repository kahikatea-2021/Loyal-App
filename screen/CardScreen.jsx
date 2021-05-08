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
})

function CardScreen() {
	const card = useSelector((globalState) => globalState.card)
	return (
		<SafeAreaView style={{ flex: 1 }}>

			<View style={{ flex: 1 }}>
				<Text>
					Card name:
					{card.name}
				</Text>
				<Text>
					Stamp:
					{card.stampCount}
				</Text>
				<Text>
					Should redeem:
					{card.shouldRedeem}
				</Text>
			</View>

			<View style={[styles.container, {
				flexDirection: 'row',
			}]}
			>
				<View style={{ flex: 2, backgroundColor: 'red' }} />
				<View style={{ flex: 2, backgroundColor: 'darkorange' }} />
				<View style={{ flex: 2, backgroundColor: 'green' }} />
			</View>

		</SafeAreaView>
	)
}

export default CardScreen
