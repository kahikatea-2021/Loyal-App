import consume from '../consume'
import { getStoreDetailAction, createStoreCardAction } from '../store/actions/storeActions'

export function getStoreDetail(dispatch) {
	consume('/stores').then((res) => {
		console.log(res.body)
		dispatch(getStoreDetailAction(res.body))
	})
}

export function createStoreCard(dispatch) {
	consume('/cards', 'post', {}).then((res) => {
		console.log('create card', res.body)

		dispatch(createStoreCardAction(res.body))
	})
}

export default {
	getStoreDetail,
	createStoreCard,
}
