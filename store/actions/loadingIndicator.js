export const SET_LOADING = 'SET_LOADING'

export function setLoadingIndicatorAction(state) {
	return {
		type: SET_LOADING,
		state,
	}
}
