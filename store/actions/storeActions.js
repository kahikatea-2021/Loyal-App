export const GET_STORE_DETAIL = 'GET_STORE_DETAIL'

export function getStoreDetailAction(store) {
	return {
		type: GET_STORE_DETAIL,
		store,
	}
}
