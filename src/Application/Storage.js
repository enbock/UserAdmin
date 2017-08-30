import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import Login from '../Login';
import Reducer from "./Reducer";

/**
 * Collect reducers of complete project.
 * @type {Object}
 */
const reducers = {
  global: Reducer,
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
