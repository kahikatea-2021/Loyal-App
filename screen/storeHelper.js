import consume from '../consume'
import { getStoreDetailAction } from '../store/actions/storeActions'

export function getStoreDetail(dispatch) {
	consume('/stores').then((res) => {
		dispatch(getStoreDetailAction(res.body))
	})
}

export default {
	getStoreDetail,
}
