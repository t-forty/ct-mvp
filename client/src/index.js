import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import store from './app/store'
import { Provider } from 'react-redux';

import  Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
      <React.StrictMode>
        <Header />
        <App />
        <Footer />
      </React.StrictMode>
  </BrowserRouter>
</Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
