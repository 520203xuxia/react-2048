import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Container from './components/Container'
import complete from './components/complete'
import {
	BrowserRouter,
	Route,
	Switch
} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
// ReactDOM.render(
// 	<Container/>, document.getElementById('root'));
// registerServiceWorker();
ReactDOM.render(
	(<BrowserRouter> 
		<Switch>
	<Route exact path='/' component={Container} />
	<Route path='/complete'  component={complete}/>
		</Switch>
	</BrowserRouter>), document.getElementById('root'));
registerServiceWorker();