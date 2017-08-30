import React from 'react';
import "./Style/Login.less";
import "./Style/SignInForm.less";
import SignInForm from "./View/SignInForm";

/**
 * Application.
 */
class LoginContainer extends React.Component {
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

  onSignIn(loginData) {
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

export default LoginContainer;
