import React from "react";
import ReactDOM from "react-dom";


import "assets/scss/material-kit-react.scss?v=1.4.0";



//redux packages
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import App from "App.js"

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
  <App/>
  </Provider>,
  document.getElementById("root")
);
