import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';
import reducers from './reduces/index';
import Demo from './pages/Demo/Demo'

let store = createStore(reducers, applyMiddleware(promiseMiddleware));

render(
    <Provider store={store}>
      <Demo />
    </Provider>,
    document.getElementById('react-redux-demo')
);