import React from 'react'
import {
	ActivityIndicator, StyleSheet, View,
} from 'react-native'
import { useSelector } from 'react-redux'

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		flex: 1,
	},
})

function LoadingComponent({ children }) {
	const initialLoadingState = useSelector((globalState) => globalState.initialStateLoading)
	return (
		initialLoadingState
			? (
				<View style={styles.container}>
					<ActivityIndicator color="white" size="large" />
				</View>
			)
			: children
	)
}

export default LoadingComponent
