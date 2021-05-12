import consume from '../consume'
import { showAlertAction } from '../store/actions/infoActions'
import { setInitialLoadingState } from '../store/actions/initialLoadingStateAction'
import { setLoadingIndicatorAction } from '../store/actions/loadingIndicator'
import { getUserWalletAction } from '../store/actions/walletAction'

export function getUserWallet(dispatch) {
	dispatch(setLoadingIndicatorAction(true))
	return consume('/wallet').then((res) => {
		dispatch(setInitialLoadingState(false))
		dispatch(getUserWalletAction(res.body))
	}).catch((err) => {
		dispatch(showAlertAction(
			{
				show: true,
				message: err.response?.body?.message,
			},
		))
		return null
	}).finally(() => {
		dispatch(setLoadingIndicatorAction(false))
	})
}

export function deleteCardFromWallet(cardId, dispatch) {
	return consume(`/wallet/${cardId}`, 'delete').then((res) => {
		dispatch(getUserWalletAction(res.body))
	}).catch((err) => {
		dispatch(showAlertAction(
			{
				show: true,
				message: err.response?.body?.message,
			},
		))
		return null
	})
}

export default {
	getUserWallet,
	deleteCardFromWallet,
}
