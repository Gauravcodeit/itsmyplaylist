

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FirstAPI } from './ApiBundle';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import RegisterScreen from './RegisterScreen';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
     <RegisterScreen />
    <FirstAPI />
    <App />
    <Footer />
  </React.StrictMode>
);