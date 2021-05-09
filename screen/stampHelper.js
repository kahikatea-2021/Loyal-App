import consume from '../consume'
// import { stamp, card } from '../mockServer/stampRouter'
import { getUserCard } from '../store/actions/cardActions'

// export function getCard(dispatch) {
// console.log(card(1))
// dispatch(getUserCard(card(1)))
// }

export function stampCard(dispatch, storeId) {
	// console.log('heheheheheheh')
	// stamp(1)
	// dispatch(getUserCard(card(1)))
	console.log(storeId)
	consume('/stamp', 'patch', {
		storeId,
	}).then((res) => {
		dispatch(getUserCard(res.body))
	})
	/* return request.patch('https://effc9dad5017.ngrok.io/api/v1/stamp')
		.set({
			Accept: 'application/json',
		})
		.send({
			userId: 'abc123',
			storeId: 1,
		})
		.then((res) => {
			console.log(res.body)
			dispatch(getUserCard(res.body))
		})( */
}

export default {
	stampCard,
}
