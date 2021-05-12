import {
	getStoreDetailAction, createStoreCardAction, GET_STORE_DETAIL, CREATE_STORE_CARD,
} from './storeActions'

describe('getStoreDetailAction', () => {
	it('returns the correct action', () => {
		const action = getStoreDetailAction({ name: 'store' })
		expect(action.type).toBe(GET_STORE_DETAIL)
		expect(action.store).toEqual({ name: 'store' })
	})
})

describe('createStoreCardAction', () => {
	it('returns the correct action', () => {
		const action = createStoreCardAction({ name: 'store' })
		expect(action.type).toBe(CREATE_STORE_CARD)
		expect(action.store).toEqual({ name: 'store' })
	})
})
