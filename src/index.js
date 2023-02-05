

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FirstAPI } from './ApiBundle';
import Header from './Header';
import Footer from './Footer';
import LoginScreen from './LoginScreen';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <LoginScreen />
    <FirstAPI />
    <App />
    <Footer />
  </React.StrictMode>
);