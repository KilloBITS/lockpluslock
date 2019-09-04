import React from 'react';
import ReactDOM from 'react-dom';
//import main container
import MainContainer from './main';
//import redux module
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//import styles
import './style/index.css';
//add store redux
import rootReducer from './store/reducers';
//create store reduc
const store = createStore(rootReducer);
//renderer from main page
ReactDOM.render(<Provider store={store}>
  <MainContainer/>
</Provider>, document.getElementById('root'));
