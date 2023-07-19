import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  useParams,
} from 'react-router-dom';

import Home from './Home.jsx';
import User from './User.jsx';
import '../styles.scss';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/user/:userId"
          element={<User />}
        />
      </Routes>
    </div>
  );
};

export default App;
