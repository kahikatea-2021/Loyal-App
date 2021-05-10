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
// import Swipeable from 'react-native-gesture-handler/Swipeable'
import { Feather } from '@expo/vector-icons'
import React from 'react'
import { RectButton } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'

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
		flexDirection: 'row',
		justifyContent: 'center',
		alignContent: 'space-around',
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
		backgroundColor: '#8977CE',
	},
	cardBg: {
		flex: 1,
		width: '100%',
		height: '100%',
		alignItems: 'center',
	},
})

function WalletScreen({ onOpen, onClose }) {
	return (
		<ScrollView>
			<SafeAreaView style={styles.container}>
				<Swipeable
					leftContent={(
						<View style={styles.leftSwipeItem}>
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
						<View style={styles.leftSwipeItem}>
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
						<View style={styles.leftSwipeItem}>
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
// function WalletScreen() {
// 	function renderRightActions(progress, dragX) {
// 		const trans = dragX.interpolate({
// 			inputRange: [0, 50, 100, 101],
// 			outputRange: [-20, 0, 0, 1],
// 		})
// 		return (
// 			<RectButton style={styles.leftAction} onPress={() => {}}>
// 				<Animated.Text>
// 					Archive
// 				</Animated.Text>
// 			</RectButton>
// 		)
// 	}
// 	return (
// 		<Swipeable renderRightActions={renderRightActions}>
// 			<Text>Card</Text>
// 		</Swipeable>
// 	  )
// }

export default WalletScreen
