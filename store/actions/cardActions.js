export const GET_USER_CARD = 'GET_USER_CARD'

export function getUserCard (data) {
	console.log(data)

	return {
		type: GET_USER_CARD,
		data,
	}
}
