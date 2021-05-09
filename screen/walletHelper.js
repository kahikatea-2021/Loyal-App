import consume from '../consume'
import { getUserWalletAction } from '../store/actions/walletAction'

export function getUserWallet(dispatch, userId = 'abc123') {
	consume(`wallet/${userId}`).then((res) => {
		dispatch(getUserWalletAction(res.body))
	})
}

export default {
	getUserWallet,
}
