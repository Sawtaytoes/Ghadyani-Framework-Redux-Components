const test = require('ava')

const ReduxConnection = require('./ReduxConnection')

test('ReduxConnection loads', t => {
	t.truthy(ReduxConnection)

	t.pass(
		"Correctly runs app"
	)
})
