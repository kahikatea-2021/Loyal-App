import { combineReducers } from 'redux'
import cardReducer from './card'
import walletReducer from './wallet'

export default combineReducers({
	card: cardReducer,
	wallet: walletReducer,
})
