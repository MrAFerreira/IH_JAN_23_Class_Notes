import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeWrapper } from './contexts/theme.context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ThemeWrapper>
        <App />
      </ThemeWrapper>
    </Router>
  </React.StrictMode>
);
