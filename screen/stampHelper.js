import consume from '../consume'
import { getUserCard } from '../store/actions/cardActions'
import { showAlertAction } from '../store/actions/infoActions'

export function stampCard(dispatch, storeId, cardId) {
	consume('/stamp', 'patch', {
		storeId,
		cardId,
	}).then((res) => {
		dispatch(getUserCard(res.body))
	}).catch((err) => {
		dispatch(showAlertAction(
			{
				show: true,
				message: err.message,
			},
		))
	})
}

export function setStampCard(card, dispatch) {
	return dispatch(getUserCard(card))/* .catch((err) => dispatch(showAlertAction(
		{
			show: true,
			message: err.response?.body?.message,
		},
	))) */
}

export function resetCard(dispatch, cardId) {
	consume('/stamp/reset', 'patch', {
		cardId,
	}).then((res) => {
		dispatch(getUserCard(res.body))
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
