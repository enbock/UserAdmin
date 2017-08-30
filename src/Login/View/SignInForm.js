import React from "react";
import Translator from '../../Shared/Translator';
import Form from '../../Shared/View/Form';
import PropTypes from "prop-types";

/**
 * Login Form.
 */
class SignInForm extends React.Component {
  /**
   * Constructor.
   *
   * @param props
   * @param context
   * @param updater
   */
  constructor(props, context, updater) {
    super(props, context, updater);
    this.state = {
      name: "",
      password: ""
    };
  }

  /**
   * Define properties.
   * @returns {Object}
   */
  static get propTypes() {
    return {
      onSubmit: PropTypes.func.isRequired
    };
  }

  /**
   * Handler for form submit.
   *
   * @param {Event} event
   */
  onSubmit(event) {
    console.log(this, event);
    this.props.onSubmit(
      {
        name: this.state.name,
        password: this.state.password
      }
    );
    event.preventDefault();
  }

  /**
   * Set name to state.
   *
   * @param value
   */
  onChangeName(value) {
    if (this.state.name !== value) {
      this.setState({name: value});
    }
  }

  /**
   * Set password to state.
   *
   * @param value
   */
  onChangePassword(value) {
    if (this.state.password !== value) {
      this.setState({password: value});
    }
  }


  /**
   * Create output.
   *
   * @returns {XML}
   */
  render() {
    return (
      <div className="form">
        <h1>{Translator('login.title.main')}</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <Form.Input label={Translator('login.label.name')} onChange={this.onChangeName.bind(this)}/>
          <Form.Input
            type="password"
            label={Translator('login.label.password')}
            onChange={this.onChangePassword.bind(this)}
          />
          <button>{Translator('login.button.submit')}</button>
        </form>
      </div>
    );
  }

}

export default SignInForm;
