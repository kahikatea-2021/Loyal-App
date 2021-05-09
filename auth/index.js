import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
	 apiKey: 'AIzaSyAsQEL9G1VwxYaHzxcsosCBNDwGZeiLVlo',
	authDomain: 'coffee-loyalty-app-312823.firebaseapp.com',
	databaseURL: 'https://coffee-loyalty-app-312823-default-rtdb.firebaseio.com',
	projectId: 'coffee-loyalty-app-312823',
	storageBucket: 'coffee-loyalty-app-312823.appspot.com',
	messagingSenderId: '1023195419958',
	appId: '1:1023195419958:web:80035f9e5d5d9fb344cf97',
	measurementId: 'G-EP8TDJ0RHZ',
	/* apiKey: 'AIzaSyAV8RHScWgUvU57E9lo4M2XpF8Ohablkb4',
	authDomain: 'loyal-cbd69.firebaseapp.com',
	projectId: 'loyal-cbd69',
	storageBucket: 'loyal-cbd69.appspot.com',
	messagingSenderId: '552424010228',
	appId: '1:552424010228:web:71970ae45cb3f3cca889a1',
	measurementId: 'G-Y8481BN92Z', */
}
let app

if (firebase.apps.length === 0) {
	app = firebase.initializeApp(firebaseConfig)
} else {
	app = firebase.app()
}

const db = app.firestore()
const auth = firebase.auth()
export { db, auth }
