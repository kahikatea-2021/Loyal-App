import consume from '../consume'
import { getUserWalletAction } from '../store/actions/walletAction'

export function getUserWallet(dispatch) {
	consume('/wallet').then((res) => {
		dispatch(getUserWalletAction(res.body))
	})
}

export default {
	getUserWallet,
}
