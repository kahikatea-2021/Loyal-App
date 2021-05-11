export const GET_USER_WALLET = 'GET_USER_WALLET'
export const DELETE_CARD_FROM_WALLET = 'DELETE_CARD_FROM_WALLET'

export function getUserWalletAction(wallet) {
	return {
		type: GET_USER_WALLET,
		wallet,
	}
}

export function deleteCardFromWalletAction(wallet) {
	return {
		type: DELETE_CARD_FROM_WALLET,
		wallet,
	}
}
