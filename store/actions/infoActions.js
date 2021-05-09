export const INFO = 'INFO'

export function showAlertAction(info) {
	return {
		type: INFO,
		info,
	}
}
