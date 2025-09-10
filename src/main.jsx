import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { SharedDataProvider } from './context/SharedDataContext.jsx'; // Import karein

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SharedDataProvider> {/* Yahan App ko wrap karein */}
      <App />
    </SharedDataProvider>
  </React.StrictMode>,
);