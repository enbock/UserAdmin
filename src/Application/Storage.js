import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import Login from '../Login';

/**
 * Collect reducers of complete project.
 * @type {Object}
 */
const reducers = {
  login: Login.Reducer
};


const middleware = process.env.NODE_ENV === 'production' ? [thunk] : [thunk, createLogger()];

/**
 * Store creator.
 *
 * @param initialState
 * @returns {Store<any>}
 */
export default function(initialState) {
  return createStore(combineReducers(reducers), applyMiddleware(...middleware), initialState);
}
