const {
	getKeyValuePairFromObject,
	reduceObjectArrayToObject,
} = require('./objectAsArray')

const getPropsNotInPropTypes = (
	propTypes,
) => (
	props,
) => (
	getKeyValuePairFromObject(props)
	.filter(({ key }) => (
		!propTypes[key]
	))
	.reduce(
		reduceObjectArrayToObject,
		{},
	)
)

module.exports = getPropsNotInPropTypes
