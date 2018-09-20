// My original inspiration goes to `jsonnull`
// Source: https://github.com/jsonnull/redux-render/blob/master/src/redux.js

const PropTypes = require('prop-types')
const { Children, Component, createElement } = require('react')

const getPropsNotInPropTypes = require('../utils/getPropsNotInPropTypes')
const objectPropsMatch = require('../utils/objectPropsMatch')

const contextTypes = {
	store: PropTypes.object,
}

const propTypes = {
	children: (
		PropTypes.oneOfType([
			PropTypes.func,
			PropTypes.node,
		])
	),
	component: PropTypes.func,
	render: PropTypes.func,
	selector: PropTypes.func,
}

const throwError = () => {
	throw new Error(
		"Missing either `children`, `component`, or `render` prop."
	)
}

class ReduxConnection extends Component {
	constructor(props, context) {
		super(
			props,
			context,
		)

		this.isSubscribedToStateUpdates = true
		this.subscribeToReduxStore()

		this.state = this.getInitialSeletorState()
	}

	componentWillUnmount() {
		this.unsubscribeFromReduxStore()
		this.isUnsubscribed = true
	}

	getInitialSeletorState() {
		const { selector } = this.props

		if (!selector) {
			return {}
		}

		const { store } = this.context

		return (
			selector(
				store.getState(),
				this.getPropsNotInPropTypes()
			)
		)
	}

	getPropsNotInPropTypes() {
		return getPropsNotInPropTypes(propTypes)(this.props)
	}

	mapSelectedStateToState() {
		if (this.isUnsubscribed) {
			return
		}

		const { selector } = this.props
		const { store } = this.context

		const selectedState = (
			selector(
				store.getState(),
				this.getPropsNotInPropTypes(),
			)
		)

		if (!objectPropsMatch(this.state, selectedState)) {
			this.setState(selectedState)
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		return (
			!(
				objectPropsMatch(
					this.getPropsNotInPropTypes(),
					getPropsNotInPropTypes(propTypes)(nextProps)
				)
			)
			|| !objectPropsMatch(this.state, nextState)
		)
	}

	subscribeToReduxStore() {
		const { selector } = this.props

		if (!selector) {
			return
		}

		const { store } = this.context

		this.unsubscribe = (
			store.subscribe(this.mapSelectedStateToState)
		)
	}

	unsubscribeFromReduxStore() {
		this.unsubscribe
		&& this.unsubscribe()
	}

	render() {
		const { children, component, render } = this.props
		const { dispatch } = this.context.store

		const childProps = {
			...this.getPropsNotInPropTypes(),
			...this.state,
			dispatch,
		}

		return (
			component
			? createElement(component, childProps)
			: (
				render
				? render(childProps)
				: (
					children
					? (
						typeof children === 'function'
						? children(childProps)
						: Children.only(children)
					)
					: throwError()
				)
			)
		)
	}
}

ReduxConnection
.propTypes = propTypes

ReduxConnection
.contextTypes = contextTypes

module.exports = ReduxConnection
