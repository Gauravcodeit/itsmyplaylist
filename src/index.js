import React from 'react';
import ReactDOM from 'react-dom/client';
import App, { Apps } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Apps />
  </React.StrictMode>
);