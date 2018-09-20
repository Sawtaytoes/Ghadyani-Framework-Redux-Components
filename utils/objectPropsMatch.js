const { getKeyValuePairFromObject } = require('./objectAsArray')

const createValueInKeyCheck = (
	props,
) => ({
	key,
	value,
}) => (
	props[key] === value
)

const objectPropsMatch = (
	prevProps,
	nextProps,
) => (
	getKeyValuePairFromObject(prevProps)
	.every(
		createValueInKeyCheck(
			nextProps
		)
	)
	&& (
		getKeyValuePairFromObject(nextProps)
		.every(
			createValueInKeyCheck(
				prevProps
			)
		)
	)
)

module.exports = objectPropsMatch
