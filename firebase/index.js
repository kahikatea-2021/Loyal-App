import * as firebase from 'firebase'
import 'firebase/auth'
import { firebaseConfig } from '../config/keys'

export function isFirebaseAppExisted () {
	return firebase.default.apps.length > 0
}
export function initializeFirebase() {
	firebase.default.initializeApp(firebaseConfig)
}
export const { auth } = firebase.default

export default {
	isFirebaseAppExisted,
	initializeFirebase,
	auth,
}
