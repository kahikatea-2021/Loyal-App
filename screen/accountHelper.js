import { auth } from '../auth'
import consume from '../consume'
import { showAlertAction } from '../store/actions/infoActions'

export function loginUser({ email, password }, dispatch) {
	return auth.signInWithEmailAndPassword(email, password)
		.catch((error) => {
			dispatch(showAlertAction(
				{
					show: true,
					message: error.code,
				},
			))
		})
}

export function registerUser(data, dispatch) {
	return consume('/account/register', 'post', data)
		.then(() => loginUser(data)).catch((err) => {
			dispatch(showAlertAction(
				{
					show: true,
					message: err.response?.body?.message,
				},
			))
			return null
		})
}

export function registerStoreUser(data, dispatch) {
	return consume('/account/store/register', 'post', data)
		.then(() => loginUser(data)).catch((err) => {
			dispatch(showAlertAction(
				{
					show: true,
					message: err.response?.body?.message,
				},
			))
			return null
		})
}
