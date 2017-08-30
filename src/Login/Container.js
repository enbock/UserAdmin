import React from 'react';
import "./Style/Login.less";
import "./Style/SignInForm.less";
import SignInForm from "./View/SignInForm";
import {connect} from "react-redux";
import StoreAwareComponent from "../Shared/StoreAwareComponent";

/**
 * Application.
 */
class LoginContainer extends StoreAwareComponent {
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
  static redux (state) {
    return {
      login: state.login,
    };
  }

  onSignIn(loginData) {
    this.dispatch('TEST', {hallo:"Welt"});
    console.log(loginData);
  }

  /**
   * Create output.
   *
   * @returns {XML}
   */
  render() {
    return (
      <div className="login-domain">
        <SignInForm onSubmit={this.onSignIn.bind(this)}/>
      </div>
    );
  }
}

export default connect(LoginContainer.redux)(LoginContainer);
