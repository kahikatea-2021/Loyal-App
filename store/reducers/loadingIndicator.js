import { SET_LOADING } from '../actions/loadingIndicator'

export default function loadingIndicator(state = false, action) {
	switch (action.typ) {
	case SET_LOADING:
		return action.state
	default:
		return state
	}
}
