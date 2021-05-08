import { GET_USER_WALLET } from '../actions/walletAction'

function walletReducer(state = [], action) {
	switch (action.type) {
	case GET_USER_WALLET:
		return action.wallet
	default:
		return state
	}
}

export default walletReducer
