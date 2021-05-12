import { getStoreDetailAction, GET_STORE_DETAIL } from './storeActions'

describe('getStoreDetailAction', () => {
	it('returns the correct action', () => {
		const action = getStoreDetailAction({ name: 'store' })
		expect(action.type).toBe(GET_STORE_DETAIL)
		expect(action.store).toEqual({ name: 'store' })
	})
})
