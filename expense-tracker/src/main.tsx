import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/tracker" element={<App />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  </React.StrictMode>
);
