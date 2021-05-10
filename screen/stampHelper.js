import consume from '../consume'
import { getUserCard } from '../store/actions/cardActions'

export function stampCard(dispatch, storeId) {
	consume('/stamp', 'patch', {
		storeId,
	}).then((res) => {
		dispatch(getUserCard(res.body))
	})
}

export function resetCard(dispatch, storeId) {
	consume('/stamp/reset', 'patch', {
		storeId,
	}).then((res) => {
		dispatch(getUserCard(res.body))
	})
}

export default {
	stampCard,
	resetCard,
}
