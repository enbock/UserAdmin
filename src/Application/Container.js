import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Login from '../Login';
import {Provider} from "react-redux";
import Storage from './Storage';

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
      <Provider store={Storage()}>
        <HashRouter>
          <Switch>
            {/* https://github.com/ReactTraining/react-router/blob/v3/docs/guides/RouteConfiguration.md */}
            <Route path="/" component={Login}/>
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}

export default ApplicationContainer;
