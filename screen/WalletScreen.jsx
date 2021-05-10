import {
	TouchableHighlight,
	SafeAreaView,
	FlatList,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from 'react-native'
import Swipeable from 'react-native-swipeable-row'
import React, { useLayoutEffect } from 'react'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
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

function Item ({ title }) {
	return (
		<View>
			<Text>{title}</Text>
		</View>
	)
}

function WalletScreen ({ navigation }) {
	useLayoutEffect(() => {
		navigation.setOptions({
			title: 'Wallet',
			headerStyle: {
				backgroundColor: '#49378E',
				shadowColor: 'transparent',
			},
			headerTintColor: '#fff',
		})
	}, [navigation])
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
