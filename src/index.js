import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
	HashRouter as Router,
	BrowserRouter,
	Route,
	Switch
} from 'react-router-dom'
import {
	Provider
} from 'react-redux';
import store from './store.js';
import Main from './routes/main'
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(
	<Provider store={store}>
    <Main/>
  </Provider>,
	document.getElementById('root'));
registerServiceWorker();