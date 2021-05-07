import stores from './store.json'
import cards from './card.json'
import users from './users.json'
import store_users from './store_user.json'

export function stamp(userId, url = '/v1/api/stamp') {
	// return new Promise((resolve, reject) => {
	const storeUser = store_users.store_users.find((storeUser) => storeUser.user_id === userId)
	const card = cards.cards.find((card) => card.store_id === storeUser.store_id)

	if (card.total > storeUser.stamp_count) {
		storeUser.stamp_count++
	}

	// })
}

export function card(userId) {
	const storeUser = store_users.store_users.find((storeUser) => storeUser.user_id === userId)
	const store = stores.stores.find((store) => store.id === storeUser.store_id)
	const { total } = cards.cards.find((card) => card.store_id === store.id)
	return {
		name: store.store_name,
		stampCount: storeUser.stamp_count,
		shouldRedeem: storeUser.stamp_count === total,

	}
}
