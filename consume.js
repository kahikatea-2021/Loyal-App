import request from 'superagent'
import { auth } from './auth'

const baseUrl = '/api/v1'

export default function consume (endpoint, method = 'get', data = {}) {
	const payLoadMethod = method.toLowerCase() === 'get' ? 'query' : 'send'
	const headers = {
		Accept: 'application/json',
	}
	console.log(endpoint)
	return request.get(endpoint)// [method](baseUrl + endpoint)
		// .set(headers)[payLoadMethod](data)
		.then((res) => res)
		.catch((err) => {
			console.log(err)
			const errMessage = err.response?.body?.error?.title
			throw new Error(errMessage || err.message)
		})
}
