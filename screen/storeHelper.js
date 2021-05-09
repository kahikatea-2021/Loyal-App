import consume from '../consume'
import { getStoreDetailAction } from '../store/actions/storeActions'

export function getStoreDetail(dispatch) {
	consume('/stores').then((res) => {
		console.log(res.body)
		dispatch(getStoreDetailAction(res.body))
	})
}

export default {
	getStoreDetail,
}
