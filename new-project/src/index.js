import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyApp from './components/MyApp'
import App from './App';
import * as serviceWorker from './serviceWorker';

// const myfirstelement = <h1>Hello React!</h1>

ReactDOM.render( <App />,
 document.getElementById('root')
 );

var newElement = document.createElement("p")
newElement.innerHTML = "this is my paragraph"

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
{/* <App />, */}