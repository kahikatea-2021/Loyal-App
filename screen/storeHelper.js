import consume from '../consume'
import { getStoreDetailAction, createStoreCardAction } from '../store/actions/storeActions'

export function getStoreDetail (dispatch) {
	consume('/stores').then((res) => {
		dispatch(getStoreDetailAction(res.body))
	})
}

export function createStoreCard (data, dispatch) {
	return consume('/store/cards', 'post', data).then((res) => {
		dispatch(createStoreCardAction(res.body))
	})
}

export default {
	getStoreDetail,
	createStoreCard,
}
