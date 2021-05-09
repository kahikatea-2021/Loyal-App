import { auth } from '../auth'
import consume from '../consume'
import { showAlertAction } from '../store/actions/infoActions'

export function registerUser(data, dispatch) {
	return consume('/account/register', 'post', data).catch((err) => {
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
	consume('/account/store/register', 'post', data).catch((err) => {
		console.log('hhdhdhdhdh')
		dispatch(showAlertAction(
			{
				show: true,
				message: err.response?.body?.message,
			},
		))
		return null
	})
}

export function loginUser({ email, password }, dispatch) {
	auth.signInWithEmailAndPassword(email, password)
		.catch((error) => {
			dispatch(showAlertAction(
				{
					show: true,
					message: error.code,
				},
			))
		})
}
