import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/styles.css';
import RouterComp from './Router';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <RouterComp />
  </React.StrictMode>,
  document.getElementById('root')
);

