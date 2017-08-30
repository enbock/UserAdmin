import React from "react";
import PropTypes from "prop-types";

class Input extends React.Component {
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
      value: props.value || ""
    };
  }

  /**
   * Define properties.
   * @returns {Object}
   */
  static get propTypes() {
    return {
      label: PropTypes.string.isRequired,
      value: PropTypes.string,
      onChange: PropTypes.func,
      type: PropTypes.string
    };
  }

  /**
   * Add changed value to state.
   *
   * @param event
   */
  onChange(event) {
    const value = event.target.value;
    if (this.state.value !== value) {
      this.setState({value: value});

      if (this.props.onChange) {
        this.props.onChange(value);
      }
    }
  }

  /**
   * Render output.
   */
  render() {
    return (
      <div className="input-field">
        <label>{this.props.label}:</label>
        <input
          type={this.props.type || 'text'}
          onChange={this.onChange.bind(this)}
          value={this.props.value}
        />
      </div>
    );
  }
}

export default Input;
