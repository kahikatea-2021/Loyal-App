import {
	TouchableHighlight,
	TouchableOpacity,
	SafeAreaView,
	FlatList,
	StyleSheet,
	Text,
	View,
	ScrollView,
	Image,
	ImageBackground,
} from 'react-native'
import Swipeable from 'react-native-swipeable-row'
import { Feather } from '@expo/vector-icons'
import React from 'react'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 20,
	},
	listItem: {
		height: 220,
		alignItems: 'center',
		justifyContent: 'center',
	},
	rightSwipeItem: {
		flex: 1,
		justifyContent: 'center',
		paddingLeft: 27,
		borderTopLeftRadius: 5,
		borderBottomLeftRadius: 5,
		// paddingRight: 10,
	},
	leftSwipeItem: {
		flex: 1,
		alignItems: 'flex-end',
		justifyContent: 'center',
		paddingRight: 20,
	},
	cardBg: {
		flex: 1,
		width: '100%',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
})

// const rightButtons = [
// 	<TouchableHighlight>
// 		<Text>
// 			<Feather name="trash-2" size={24} color="black" />
// 		</Text>
// 	</TouchableHighlight>,
// ]

// const rightButtonWidth = 95

// const DATA = [
// 	{
// 		id: 1,
// 		title: 'First Card',
// 	},
// 	{
// 		id: 2,
// 		title: 'Second Card',
// 	},
// 	{
// 		id: 3,
// 		title: 'Third Card',
// 	},
// 	{
// 		id: 4,
// 		title: 'Fourth Card',
// 	},
// ]

// function Item({ title }) {
// 	return (
// 		<View style={styles.item}>
// 			<Text>{title}</Text>
// 		</View>
// 	)
// }

function WalletScreen({ onOpen, onClose }) {
	return (
		<ScrollView>
			<SafeAreaView style={styles.container}>
				<Swipeable
					leftContent={(
						<View style={[styles.leftSwipeItem, { backgroundColor: '#8977CE' }]}>
							<Text />
						</View>
					)}
					rightButtons={[
						<TouchableOpacity style={[styles.rightSwipeItem, { backgroundColor: '#B80F0F' }]}>
							<Text>
								<Feather name="trash-2" size={24} color="#FCFAF1" />
							</Text>
						</TouchableOpacity>,

					]}
					onRightButtonsOpenRelease={onOpen}
					onRightButtonsCloseRelease={onClose}
				>
					<View style={[styles.listItem, { backgroundColor: '#FCFAF1' }]}>
						<ImageBackground
							style={styles.cardBg}
							source={require('../assets/walletCardTest.png')}
						/>
					</View>
				</Swipeable>
				<Swipeable
					leftContent={(
						<View style={[styles.leftSwipeItem, { backgroundColor: '#AFAFAF' }]}>
							<Text />
						</View>
					)}
					rightButtons={[
						<TouchableOpacity style={[styles.rightSwipeItem, { backgroundColor: '#B80F0F' }]}>
							<Text>
								<Feather name="trash-2" size={24} color="#FCFAF1" />
							</Text>
						</TouchableOpacity>,

					]}
					onRightButtonsOpenRelease={onOpen}
					onRightButtonsCloseRelease={onClose}
				>
					<View style={[styles.listItem, { backgroundColor: '#FCFAF1' }]}>
						<ImageBackground
							style={styles.cardBg}
							source={require('../assets/walletCardTest.png')}
						/>
					</View>
				</Swipeable>
				<Swipeable
					leftContent={(
						<View style={[styles.leftSwipeItem, { backgroundColor: '#AFAFAF' }]}>
							<Text />
						</View>
					)}
					rightButtons={[
						<TouchableOpacity style={[styles.rightSwipeItem, { backgroundColor: '#B80F0F' }]}>
							<Text>
								<Feather name="trash-2" size={24} color="#FCFAF1" />
							</Text>
						</TouchableOpacity>,

					]}
					onRightButtonsOpenRelease={onOpen}
					onRightButtonsCloseRelease={onClose}
				>
					<View style={[styles.listItem, { backgroundColor: '#FCFAF1' }]}>
						<ImageBackground
							style={styles.cardBg}
							source={require('../assets/walletCardTest.png')}
						/>
					</View>
				</Swipeable>
			</SafeAreaView>
		</ScrollView>

	)
}

export default WalletScreen
