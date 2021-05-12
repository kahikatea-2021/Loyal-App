import React, { useRef } from 'react'
import { RectButton, Swipeable } from 'react-native-gesture-handler'
import {
	Animated, StyleSheet, View, I18nManager,
} from 'react-native'
import { Feather } from '@expo/vector-icons'

const styles = StyleSheet.create({
	leftAction: {
		flex: 1,
		backgroundColor: '#8977CE',
		justifyContent: 'flex-end',
		alignItems: 'center',
		flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse',
	},
	actionIcon: {
		margin: 15,
	},
	rightAction: {
		alignItems: 'center',
		marginTop: 20,
		marginBottom: 0,
		flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
		backgroundColor: '#dd2c00',
		justifyContent: 'flex-end',
	},
})

const AnimatedView = Animated.createAnimatedComponent(View)

function SwipeableItem({ children, handleRight }) {
	const swipeable = useRef(null)
	function RenderRightAction(_progress, dragX) {
		const scale = dragX.interpolate({
			inputRange: [-80, 0],
			outputRange: [1, 0],
			extrapolate: 'clamp',
		})
		return (
			<RectButton
				onPress={handleRight}
				style={styles.rightAction}
			>
				<AnimatedView style={[styles.actionIcon, { transform: [{ scale }] }]}>
					<Feather name="trash-2" size={30} color="#FCFAF1" />
				</AnimatedView>
			</RectButton>
		)
	}
	function RenderLeftAction(_progress, dragX) {
		const scale = dragX.interpolate({
			inputRange: [-80, 0],
			outputRange: [1, 0],
			extrapolate: 'clamp',
		})
		return (
			<RectButton
				style={styles.leftAction}
			>
				<AnimatedView style={[styles.actionIcon, { transform: [{ scale }] }]}>
					<Feather name="trash-2" size={30} />
				</AnimatedView>
			</RectButton>
		)
	}
	return (
		<Swipeable
			ref={swipeable}
			friction={2}
			leftThreshold={20}
			onSwipeableLeftOpen={() => { swipeable.current.close() }}
			rightThreshold={20}
			enableTrackpadTwoFingerGesture
			renderRightActions={RenderRightAction}
			renderLeftActions={RenderLeftAction}
		>
			{children}
		</Swipeable>
	)
}

export default SwipeableItem
