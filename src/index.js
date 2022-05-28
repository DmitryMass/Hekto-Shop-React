import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './Components/App';
import './index.scss';
//

//

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.createRoot(document.querySelector('.root')).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
});
