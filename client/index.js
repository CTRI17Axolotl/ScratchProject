import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const root = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  root
);


// import createRoot if we need this
// const root = createRoot(document.getElementById('root'))
// root.render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>,
//     root
//   );