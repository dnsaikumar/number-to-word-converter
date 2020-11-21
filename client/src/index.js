import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { browserHistory } from 'react-router';
import createStore from './store/createStore';
import AppContainer from './containers/AppContainer';

const initialState = window.__INITIAL_STATE__
const store = createStore(initialState)

let render = () => {
  const routes = require('./routes/index').default(store)

  ReactDOM.render(
    <AppContainer 
      store={store}
      history={browserHistory}
      routes={routes}
    />,
    document.getElementById('root')
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

render();
