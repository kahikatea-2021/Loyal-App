import {
	TouchableHighlight,
	SafeAreaView,
	FlatList,
	Stylesheet,
	Text,
	View,
} from 'react-native'
import Swipeable from 'react-native-swipeable-row'
import React from 'react'

const styles = Stylesheet.create({
	container: {
		flex: 1,
	},
})

const rightButtons = [
	<TouchableHighlight><Text>Button</Text></TouchableHighlight>,
]

const DATA = [
	{
		id: 1,
		title: 'First Item',
	},
]

function Item({ title }) {
	return (
		<View>
			<Text>{title}</Text>
		</View>
	)
}

function WalletScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<Swipeable rightButtons={rightButtons}>
				<FlatList
					data={DATA}
					renderItem={({ item }) => <Item title={item.title} />}
					keyExtractor={(item) => item.id}
				/>
			</Swipeable>
		</SafeAreaView>
	)
}

export default WalletScreen
