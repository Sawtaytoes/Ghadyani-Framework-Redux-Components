const getEntriesFromObject = (
	object,
) => (
	Object
	.keys(object)
	.map(key => ([
		key,
		object[key],
	]))
)

const getKeyValuePairFromObject = (
	object,
) => (
	Object
	.keys(object)
	.map(key => ({
		key,
		value: object[key],
	}))
)

const reduceObjectArrayToObject = (
	object,
	{
		key,
		value,
	},
) => ({
	...object,
	[key]: value,
})

module.exports = {
	getEntriesFromObject,
	getKeyValuePairFromObject,
	reduceObjectArrayToObject,
}
