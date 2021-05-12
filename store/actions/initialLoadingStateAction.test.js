import {
	setInitialLoadingState, INITIAL_LOADING_STATE_OFF,
} from './initialLoadingStateAction'

describe('setInitialLoadingState', () => {
	it('returns the correct action', () => {
		const action = setInitialLoadingState({ name: 'newState' })
		expect(action.type).toBe(INITIAL_LOADING_STATE_OFF)
		expect(action.newState).toEqual({ name: 'newState' })
	})
})
