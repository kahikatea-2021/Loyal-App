import storeReducer from './store'
import { GET_STORE_DETAIL } from '../actions/storeActions'

describe('store reducer', () => {
	it('returns new store object on "GET_STORE_DETAIL"', () => {
		const emptyStore = {
			id: '',
			name: '',
		}

		const action = {
			type: GET_STORE_DETAIL,
			store: {
				id: 1,
				name: 'rad store',
			},
		}
		const newState = storeReducer(emptyStore, action)

		expect(newState.id).toBe(1)
		expect(newState).not.toBe(emptyStore)
	})

	it('returns old state on unknown action type', () => {
		const emptyStore = {
			id: '',
			name: '',
		}

		const action = {
			type: 'RANDOM_OTHER_ACTION',
		}
		const newState = storeReducer(emptyStore, action)
		expect(newState).toBe(emptyStore)
	})
})
