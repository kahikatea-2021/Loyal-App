import consume from '../consume'
import { showAlertAction } from '../store/actions/infoActions'
import { setInitialLoadingState } from '../store/actions/initialLoadingStateAction'
import { getStoreDetailAction, createStoreCardAction } from '../store/actions/storeActions'

export function getStoreDetail (dispatch) {
	return new Promise((resolve, reject) => {
		consume('/stores').then((res) => {
			dispatch(setInitialLoadingState(false))
			dispatch(getStoreDetailAction(res.body))
			resolve()
		}).catch((err) => {
			dispatch(showAlertAction(
				{
					show: true,
					message: err.response?.body?.message,
				},
			))
			reject(err)
		})
	})
}

export function createStoreCard (data, dispatch) {
	return consume('/store/cards', 'post', data).then((res) => {
		dispatch(createStoreCardAction(res.body))
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
	getStoreDetail,
	createStoreCard,
}
