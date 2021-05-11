import consume from '../consume'
import { getUserWalletAction, deleteCardFromWalletAction } from '../store/actions/walletAction'

export function getUserWallet(dispatch) {
	consume('/wallet').then((res) => {
		dispatch(getUserWalletAction(res.body))
	})
}

export function deleteCardFromWallet(cardId, dispatch) {
	return consume(`/wallet/${cardId}`, 'delete').then((res) => {
		dispatch(getUserWalletAction(res.body))
	})
}

export default {
	getUserWallet,
	deleteCardFromWallet,
}
