import React from "react";
import {connect} from "react-redux";
import axios from 'axios';
import config from 'config';
import StoreAwareComponent from "../Shared/StoreAwareComponent";
import Application from "../Application";

class Action extends StoreAwareComponent {
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
   * Map redux state data to props.
   * @param state
   * @returns {*}
   */
  static redux(state) {
    return {
      login: state.login,
    };
  }

  /**
   * Decide action based on state.
   *
   * @param nextProps
   */
  componentWillUpdate(nextProps) {
    const nextAccountData = nextProps.login.accountData;
    /**
     * Check if login data has entered and call request.
     */
    if (
      this.props.login.accountData.name !== nextAccountData.name
      || this.props.login.accountData.password !== nextAccountData.password
    ) {
      this.signIn(nextAccountData);
    }
  }

  /**
   * Apply ajax call.
   *
   * @param accountData
   */
  signIn(accountData) {
    axios.post(config.backend + '/account/sign_in/', accountData)
      .then(this.onSignIn.bind(this))
      .catch(this.onNetworkError.bind(this))
    ;
  }

  /**
   * Handle success response.
   *
   * @param response
   */
  onSignIn(response) {
    this.dispatch(Application.Event.SESSION_UPDATE, response.data.session);
  }

  /**
   * Handle ajax errors.
   *
   * @param error
   */
  onNetworkError(error) {
    console.log("Network Error:", Object.assign({}, error));
  }


  /**
   * No output.
   *
   * @returns {null}
   */
  render() {
    return null;
  }

}

export default connect(Action.redux)(Action);
