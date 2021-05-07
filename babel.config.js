const firebase = require('firebase/app')

const firebaseConfig = {
	apiKey: 'AIzaSyAV8RHScWgUvU57E9lo4M2XpF8Ohablkb4',
	authDomain: 'loyal-cbd69.firebaseapp.com',
	projectId: 'loyal-cbd69',
	appId: '1:552424010228:web:71970ae45cb3f3cca889a1',
	measurementId: 'G-Y8481BN92Z',
}

firebase.initializeApp(firebaseConfig)
module.exports = function (api) {
	api.cache(true)
	return {
		presets: ['babel-preset-expo'],
	}
}
