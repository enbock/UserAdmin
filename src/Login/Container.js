import React from 'react';
import Translator from '../Shared/Translator';
import "./Style/Login.less";
import "./Style/LoginForm.less";
import Form from '../Shared/View/Form';

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

  /**
   * Handler for form submit.
   *
   * @param event
   */
  onSubmit(event) {
    console.log(this, event);
  }

  /**
   * Create output.
   *
   * @returns {XML}
   */
  render() {
    return (
      <div className="login-domain">
        <div className="form">
          <h1>{Translator('login.title.main')}</h1>
          <form onSubmit={this.onSubmit.bind(this)}>
            <Form.Input label={Translator('login.label.name')}/>
            <Form.Input label={Translator('login.label.password')}/>
            <button>{Translator('login.button.submit')}</button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginContainer;
