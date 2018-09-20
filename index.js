#!/usr/bin/env node

// This import must come before setting up module aliases.
// Because `base` brings in `setup-module-aliases`, it needs to run before setting the alias when linking packages.
require('@ghadyani-framework/base')

require('@ghadyani-framework/setup-module-aliases')(__dirname)

module.exports = {
	ReduxConnection: require('$components/ReduxConnection'),
}
