import { combineReducers } from 'redux'
import cardReducer from './card'
import walletReducer from './wallet'
import storeReducer from './store'
import infoReducer from './info'
import userInfoReducer from './userInfo'
export default combineReducers({
	card: cardReducer,
	wallet: walletReducer,
	store: storeReducer,
	info: infoReducer,
	user: userInfoReducer ,
})
