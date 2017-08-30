import React from "react";

/**
 * State data storage of login domain.
 */
const storage = {

};

/**
 * The reducer of the product domain.
 * Set the state data on the store by incoming events.
 *
 * @param state
 * @param action
 * @returns {*}
 * @constructor
 */
class Reducer {
  /**
   * Event handler.
   *
   * @param state
   * @param event
   * @returns {Object} New state data object.
   */
  static reduce(state = storage, event) {
    let update = {};

    switch (event.type) {
      case 'TEST': {
        update = event.data;
      }
    }
    return this._addState(state, update);
  }

  /**
   * Create new object with merged states.
   *
   * @param currentState
   * @param newState
   * @returns {Object}
   * @private
   */
  static _addState(currentState, newState) {
    return Object.assign({}, currentState, newState);
  }
}

/**
 * ES5 connector and default export.
 * @param state
 * @param action
 * @returns {Object}
 */
export default function connectReducer (state, action) {
  return Reducer.reduce(state, action);
}
