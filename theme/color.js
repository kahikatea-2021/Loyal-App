const tintColorLight = 'red'
const tintColorDark = '#000'

const primary = '#49378E'

export default {
	light: {
		text: 'white',
		background: primary,
		primary,
		tint: tintColorLight,
		tabIconDefault: '#ccc',
		tabIconSelected: tintColorLight,
	},
	dark: {
		text: '#fff',
		background: '#000',
		tint: tintColorDark,
		tabIconDefault: '#ccc',
		tabIconSelected: tintColorDark,
	},
}
