import { card } from '../../mockServer/stampRouter'
import { GET_USER_CARD } from '../actions/cardActions'

const initialState = {}

const cardReducer = (state = initialState, action) => {
	switch (action.type) {
	case GET_USER_CARD:
		return action.data
	default:
		return state
	}
}

export default cardReducer
