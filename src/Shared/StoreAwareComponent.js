
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Store aware component.
 */
class StoreAwareComponent extends React.Component {
  /**
   * Constructor.
   * Setup initial internal flags.
   *
   * @constructor
   * @param props
   * @param context
   * @param updater
   */
  constructor (props, context, updater) {
    super(props, context, updater);
  }

  /**
   * Define context properties.
   *
   * @type {Object}
   */
  static get contextTypes () {
    return {
      store: PropTypes.object
    };
  }

  /**
   * Event dispatcher.
   *
   * @param {string} type Event type.
   * @param {Object} data Event data.
   *
   * @returns {Object} For convenience, the action object you dispatched.
   */
  dispatch (type, data = {}) {
    const action = {
            type: type,
            data: data
          }
    ;

    return this.context.store.dispatch(action);
  }
}

export default StoreAwareComponent;
