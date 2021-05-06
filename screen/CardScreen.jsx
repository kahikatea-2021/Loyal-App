import React from 'react'
import {
	SafeAreaView, Text, View, Image,
} from 'react-native'

function CardScreen() {
	return (
		<SafeAreaView>
			<View>
				<Text>Hello this is the card</Text>
				{/* eslint-disable-next-line global-require */}
				<Image source={require('../assets/tom-jerry.jpeg')} />
			</View>
		</SafeAreaView>
	)
}

export default CardScreen
