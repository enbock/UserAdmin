import React from 'react';
import Translator from '../Shared/Translator';

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
    console.log(event);
  }

  /**
   * Create output.
   *
   * @returns {XML}
   */
  render() {
    return (
      <div>
        <h1>Hello Login</h1>
        <form onSubmit={this.onSubmit}>
          <label>{Translator('login.label.name')} :</label>
          <input/>
          <label>{Translator('login.label.password')} :</label>
          <input/>
          <button>{Translator('login.button.submit')}</button>
        </form>
      </div>
    );
  }
}

export default LoginContainer;
