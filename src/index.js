import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Application from './Application';

window.onload = function runProject() {
    /** Run bootstrap */
    ReactDOM.render(
        <Application/>,
        document.querySelector('application')
    );
};
