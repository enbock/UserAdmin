import React from "react";
import Event from "./Event";

/**
 * State data storage of global domain.
 */
const storage = {
  /**
   * Session Id
   */
  session: ""
};

/**
 * The reducer of the global domain.
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
      case Event.SESSION_UPDATE:
        update.session = event.data;
        break;
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
export default function connectReducer(state, action) {
  return Reducer.reduce(state, action);
}
