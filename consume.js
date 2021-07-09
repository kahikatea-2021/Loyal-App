import request from 'superagent'
import { auth } from './firebase'
import { showAlertAction } from './store/actions/infoActions'

const baseUrl = 'http://a82b39addd6c.ngrok.io/api/v1'
export default function consume (endpoint, method = 'get', data = {}) {
	const payLoadMethod = method.toLowerCase() === 'get' ? 'query' : 'send'
	const headers = {
		Accept: 'application/json',
	}
	const user = auth().currentUser
	if (user) {
		return user.getIdTokenResult(true).then((idToken) => request[method](baseUrl + endpoint)
			.set({
				Authorization: idToken ? `Bearer ${idToken.token}` : '',
			})
			.set(headers)[payLoadMethod](data)
			.then((res) => res)
			.catch((err) => {
				const errMessage = err.response?.body?.error?.title
				throw new Error(errMessage || err.message)
			}))
	}
	return request[method](baseUrl + endpoint)
		.set(headers)[payLoadMethod](data)
		.then((res) => res)
}
