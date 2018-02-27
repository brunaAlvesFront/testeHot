import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Router, Route, browserHistory} from 'react-router';
import {Formulario} from './Produtos';

ReactDOM.render(
	(<Router history={browserHistory}>
		<Route path="/" component={App}/>
		<Route path="/produtos" component={Formulario}/>
	</Router>),
	document.getElementById('root'));
