import { GET_STORE_DETAIL } from '../actions/storeActions'

const storeReducer = (state = {}, action) => {
	switch (action.type) {
	case GET_STORE_DETAIL:
		return action.store
	default:
		return state
	}
}

export default storeReducer
