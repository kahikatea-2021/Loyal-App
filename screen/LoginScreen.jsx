
import React from 'react'
import {
	SafeAreaView, Text, Button, Platform, StyleSheet,
} from 'react-native'
import * as WebBrowser from 'expo-web-browser'
import { makeRedirectUri, useAuthRequest, useAutoDiscovery } from 'expo-auth-session'
import firebase from 'firebase/app'
import 'firebase/auth'

WebBrowser.maybeCompleteAuthSession()

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})

firebase.auth().onAuthStateChanged((user) => {
	alert('heheh')

	// Do other things
})

const useProxy = Platform.select({ web: false, default: true })
function LoginScreen() {
	// Endpoint
	const discovery = useAutoDiscovery('https://dev-47896472.okta.com/oauth2/default')
	// Request
	const [request, response, promptAsync] = useAuthRequest(
		{
			clientId: '0oap31anjC3LShdSo5d6',
			scopes: ['openid', 'profile'],
			// For usage in managed apps using the proxy
			redirectUri: makeRedirectUri({
				// For usage in bare and standalone
				native: 'com.okta.dev-47896472:/callback',
				useProxy,
			}),
		},
		discovery,
	)

	React.useEffect(() => {
		if (response?.type === 'success') {
			const { code } = response.params
		}
	}, [response])
	return (
		<SafeAreaView style={styles.container}>
			<Button
				disabled={!request}
				title="Login dd"
				onPress={() => {
					promptAsync({ useProxy })
				}}
			/>
		</SafeAreaView>
	)
}

export default LoginScreen
