import React from 'react'
import {
	ActivityIndicator, StyleSheet, View,
} from 'react-native'

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})

function LoadingComponent() {
	return (
		<View style={styles.container}>
			<ActivityIndicator color="white" size="large" />
		</View>
	)
}

export default LoadingComponent
