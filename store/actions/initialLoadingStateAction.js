export const INITIAL_LOADING_STATE_OFF = 'INITIAL_LOADING_STATE_OFF'

export function setInitialLoadingState(newState) {
	return {
		type: INITIAL_LOADING_STATE_OFF,
		newState,
	}
}
