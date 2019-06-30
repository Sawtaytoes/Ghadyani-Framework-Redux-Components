_**NOTE:** This project is very simple to create using Redux-Hooks so it's no longer going to be supported in the future._

To do the same thing with Redux Hooks, this is what it would look like:

```js
const TestComponent = ({
	someProp,
}) => {
	const dispatch = useDispatch()

	const { somethingFromState } = (
		useSelector(
			selectSomethingFromState(someProp)
		)
	)

	return (
		<div>
			{somethingFromState}
		</div>
	)
}
```

# Redux Components for Ghadyani Framework Packages
Redux helper components (currently just `ReduxConnection`).

## Installation

### `npm`
```sh
npm i @ghadyani-framework/redux-components @ghadyani-framework/base
```

### `yarn`
```sh
yarn add @ghadyani-framework/redux-components @ghadyani-framework/base
```

## API

### Redux Components
- `ReduxConnection`

### fp Utilites (not exposed at this time)
- `getPropsNotInPropTypes`
- `objectPropsMatch`
- `getEntriesFromObject`
- `getKeyValuePairFromObject`
- `reduceObjectArrayToObject`

# `ReduxConnection`
> Docs coming soon!
_See the [Medium Article](https://medium.com/@Sawtaytoes/why-you-shouldnt-need-connect-from-react-redux-498876de9e4e) for usage._
