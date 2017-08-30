import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Application from './Application';
import {Provider} from "react-redux";

window.onload = function runProject() {
  /** Run bootstrap */
  ReactDOM.render(
    (
      <Provider store={Application.Storage()}>
        <Application/>
      </Provider>
    ),
    document.querySelector('application')
  );
};
