import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store.js'
import './../styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
  <React.StrictMode>
      <BrowserRouter warning={false}>
        <App />
      </BrowserRouter>
  </React.StrictMode>
  </Provider>
)
