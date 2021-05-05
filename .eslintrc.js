module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	rules: {
		indent: [
			'error',
			'tab',
		],
		// eslint-disable-next-line no-bitwise
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/prop-types': 0,
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'linebreak-style': [
			'error',
			'unix',
		],
		'func-names': 0,
		quotes: [
			'error',
			'single',
		],
		semi: [
			'error',
			'never',
		],
		'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
		'space-before-function-paren': 'off',
	},
}
