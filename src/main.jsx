import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import DownloadPage from './DownloadPage.jsx';
import './styles.css';

const path = window.location.pathname;

const renderComponent = () => {
  if (path === '/money-tracker/download' || path === '/money-tracker/download/') {
    return <DownloadPage />;
  }
  return <App />;
};

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {renderComponent()}
  </React.StrictMode>
);
