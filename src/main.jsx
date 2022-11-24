import React from 'react';
import ReactDOM from 'react-dom/client';
import { ClimaProvider } from './context/ClimaProvider'
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClimaProvider>
      <App />
    </ClimaProvider>
  </React.StrictMode>
)
