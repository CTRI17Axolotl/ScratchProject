import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import StoreProvider from './routes/dataStore.js';
import App from './routes/App.jsx';
import './styles.scss';

const root = createRoot(document.getElementById('root'));
root.render(
  <StoreProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreProvider>
);
