import {
	getUserWalletAction, deleteCardFromWalletAction, GET_USER_WALLET, DELETE_CARD_FROM_WALLET,
} from './walletAction'

describe('getUserWalletAction', () => {
	it('returns the correct action', () => {
		const action = getUserWalletAction({ name: 'wallet' })
		expect(action.type).toBe(GET_USER_WALLET)
		expect(action.wallet).toEqual({ name: 'wallet' })
	})
})

describe('deleteCardFromWallet', () => {
	it('returns the correct action', () => {
		const action = deleteCardFromWalletAction({ name: 'wallet' })
		expect(action.type).toBe(DELETE_CARD_FROM_WALLET)
		expect(action.wallet).toEqual({ name: 'wallet' })
	})
})
