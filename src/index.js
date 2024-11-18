import React from 'react';
import ReactDOM from 'react-dom/client';  // For React 18 and above
import './index.css';  // Optional: Import global styles
import App from './App';  // The main App component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
