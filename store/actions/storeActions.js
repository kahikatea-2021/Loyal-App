export const GET_STORE_DETAIL = 'GET_STORE_DETAIL'
export const CREATE_STORE_CARD = 'CREATE_STORE_CARD'

export function getStoreDetailAction(store) {
	return {
		type: GET_STORE_DETAIL,
		store,
	}
}

export function createStoreCardAction(store) {
	return {
		type: CREATE_STORE_CARD,
		store,
	}
}
