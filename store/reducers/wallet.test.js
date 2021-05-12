import walletReducer from './wallet'
import { GET_USER_WALLET, DELETE_CARD_FROM_WALLET } from '../actions/walletAction'

describe('wallet reducer', () => {
	it('returns new user wallet object on "GET_USER_WALLET"', () => {
		const emptyWallet = {
			id: '',
			name: '',
		}

		const action = {
			type: GET_USER_WALLET,
			wallet: {
				id: 1,
				name: 'A Wallet',
			},
		}
		const newState = walletReducer(emptyWallet, action)

		expect(newState.id).toBe(1)
		expect(newState).not.toBe(emptyWallet)
	})

	it('returns old state on unknown action type', () => {
		const emptyWallet = {
			id: '',
			name: '',
		}

		const action = {
			type: 'RANDOM_OTHER_ACTION',
		}
		const newState = walletReducer(emptyWallet, action)
		expect(newState).toBe(emptyWallet)
	})
	it('returns wallet with one less card after card deleted on "DELETE_CARD_FROM_WALLET"', () => {
		const existingCard = {
			name: 'Existing coffee joint',
		}
		const action = {
			type: DELETE_CARD_FROM_WALLET,
			wallet: {
				{}
			},
		}
		const newState = walletReducer(existingCard, action)

		expect(newState.name).toBe({})
		expect(newState).not.toBe(existingCard)
	})
})
