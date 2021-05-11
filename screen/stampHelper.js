import consume from '../consume'
import { getUserCard } from '../store/actions/cardActions'

export function stampCard(dispatch, storeId, cardId) {
	consume('/stamp', 'patch', {
		storeId,
		cardId,
	}).then((res) => {
		dispatch(getUserCard(res.body))
	})
}

export function setStampCard(card, dispatch) {
	return dispatch(getUserCard(card))
}

export function resetCard(dispatch, cardId) {
	consume('/stamp/reset', 'patch', {
		cardId,
	}).then((res) => {
		dispatch(getUserCard(res.body))
	})
}
