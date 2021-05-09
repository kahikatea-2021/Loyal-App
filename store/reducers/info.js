import { INFO } from '../actions/infoActions'

const infoReducer = (state = {}, action) => {
	switch (action.type) {
	case INFO:
		return action.info ? action.info : state
	default:
		return state
	}
}

export default infoReducer
