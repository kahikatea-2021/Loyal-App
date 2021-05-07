import { stamp, card } from '../mockServer/stampRouter'
import { getUserCard } from '../store/actions/cardActions'

export function getCard(dispatch) {
	console.log(card(1))
	dispatch(getUserCard(card(1)))
}

export function stampCard(dispatch) {
	console.log('heheheheheheh')
	stamp(1)
	dispatch(getUserCard(card(1)))
}
