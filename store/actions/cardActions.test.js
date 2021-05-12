import {
	getUserCard, GET_USER_CARD,
} from './cardActions'

describe('getUserCard', () => {
	it('returns the correct action', () => {
		const action = getUserCard({ name: 'data' })
		expect(action.type).toBe(GET_USER_CARD)
		expect(action.data).toEqual({ name: 'data' })
	})
})
