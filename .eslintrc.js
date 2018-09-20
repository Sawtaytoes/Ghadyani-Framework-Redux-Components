const { resolve } = require('path')

module.exports = {
	extends: [
		'@ghadyani-framework/node',
		'@ghadyani-framework/web',
	],
	settings: {
		'import/resolver': {
			alias: [
				['$utils', resolve(__dirname, 'utils')],
			],
		}
	},
}
