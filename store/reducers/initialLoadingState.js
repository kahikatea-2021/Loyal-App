import { INITIAL_LOADING_STATE_OFF } from '../actions/initialLoadingStateAction'

const initailLoadingStateReducer = (state = true, action) => {
	switch (action.type) {
	case INITIAL_LOADING_STATE_OFF:
		return action.newState
	default:
		return state
	}
}

export default initailLoadingStateReducer
