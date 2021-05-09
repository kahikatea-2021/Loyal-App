import { combineReducers } from 'redux'
import cardReducer from './card'
import walletReducer from './wallet'
import storeReducer from './store'
import infoReducer from './info'

export default combineReducers({
	card: cardReducer,
	wallet: walletReducer,
	store: storeReducer,
	info: infoReducer,
})
