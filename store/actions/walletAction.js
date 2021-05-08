export const GET_USER_WALLET = 'GET_USER_WALLET'

export function getUserWalletAction(wallet) {
	return {
		type: GET_USER_WALLET,
		wallet,
	}
}
