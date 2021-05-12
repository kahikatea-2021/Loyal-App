import {
	showAlertAction, INFO,
} from './infoActions'

describe('showAlertAction', () => {
	it('returns the correct action', () => {
		const action = showAlertAction({ name: 'info' })
		expect(action.type).toBe(INFO)
		expect(action.info).toEqual({ name: 'info' })
	})
})
