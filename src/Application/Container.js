import React from 'react';
import {	HashRouter, Route, Switch } from 'react-router-dom';
import Login from '../Login';

/**
 * Application.
 */
class ApplicationContainer extends React.Component {
	/**
	 * Constructor.
	 *
	 * @param props
	 * @param context
	 * @param updater
	 */
	constructor(props, context, updater) {
		super(props, context, updater);
	}
	/**
	 * Create output.
	 */
	render() {
		return (
			<HashRouter>
        <Switch>
          {/* https://github.com/ReactTraining/react-router/blob/v3/docs/guides/RouteConfiguration.md */}
          <Route path="/" component={Login}/>
        </Switch>
			</HashRouter>
		);
	}
}
export default ApplicationContainer;
