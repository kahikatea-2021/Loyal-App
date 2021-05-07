import React from 'react'
import { useSelector } from 'react-redux'
import {
	SafeAreaView, Text, View, Image,
} from 'react-native'

function CardScreen() {
	const card = useSelector((globalState) => globalState.card)
	return (
		<SafeAreaView>
			<View>
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
				<Text>Hello this is the card</Text>
				{/* eslint-disable-next-line global-require */}
				<Image source={require('../assets/tom-jerry.jpeg')} />
			</View>
		</SafeAreaView>
	)
}

export default CardScreen
