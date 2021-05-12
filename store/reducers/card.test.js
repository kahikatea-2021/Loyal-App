import { GET_USER_CARD } from '../actions/cardActions'
import cardReducer from './card'

describe('card reducer', () => {
	it('returns new card object on "GET_USER_CARD"', () => {
		const emptyCard = {
			id: '',
			name: '',
		}

		const action = {
			type: GET_USER_CARD,
			data: {
				id: 1,
				name: 'rad card',
			},
		}
		const newState = cardReducer(emptyCard, action)
		console.log(newState)

		expect(newState.id).toBe(1)
		expect(newState).not.toBe(emptyCard)
	})

	it('returns old state on unknown action type', () => {
		const emptyCard = {
			id: '',
			name: '',
		}

		const action = {
			type: 'RANDOM_OTHER_ACTION',
		}
		const newState = cardReducer(emptyCard, action)
		expect(newState).toBe(emptyCard)
	})
})
