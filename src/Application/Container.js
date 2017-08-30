import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Login from '../Login';
import {connect} from "react-redux";
import Dummy from "../Dummy/Container";
import StoreAwareComponent from "../Shared/StoreAwareComponent";

/**
 * Application.
 */
class ApplicationContainer extends StoreAwareComponent {
  /**
   * Constructor.
   *
   * @param props
   * @param context
   * @param updater
   */
  constructor(props, context, updater) {
    super(props, context, updater);
    this.router = null;
  }

  /**
   * Map redux state data to props.
   * @param state
   * @returns {*}
   */
  static redux(state) {
    return {
      global: state.global,
    };
  }

  /**
   * Wen update let check states for new routes.
   * @param nextProps
   */
  componentWillUpdate(nextProps) {
    const {session} = nextProps.global;
    const history = this.router.history;
    const pathName = history.location.pathname;

    // No session => go to login
    if (session === "") {
      if (pathName !== "/") {
        history.push('/');
      }
    }

    // Session exists => go to dummy :-D
    if (session) {
      if (!pathName.match(/^\/dummy/)) {
        history.push('/dummy');
      }
    }
  }

  /**
   * Component was mounted.
   */
  componentDidMount() {
    this.setState({mounted: true});
  }

  /**
   * Component will be dismount.
   */
  componentWillUnmount() {
    this.setState({mounted: false});
  }

  /**
   * Create output.
   */
  render() {
    return (
      <HashRouter ref={instance => this.router = instance}>
        <Switch>
          {/* https://github.com/ReactTraining/react-router/blob/v3/docs/guides/RouteConfiguration.md */}
          <Route path="/dummy" component={Dummy} />
          <Route path="/" component={Login} />
        </Switch>
      </HashRouter>
    );
  }
}

export default connect(ApplicationContainer.redux)(ApplicationContainer);
