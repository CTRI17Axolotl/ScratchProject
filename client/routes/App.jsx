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
import SignIn from './SignIn.jsx';
import '../styles.scss';

const App = () => {
  return (
    <div>
      {/* <FileContext.Provider value={store}> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/user/:userId" element={<User />} />
      </Routes>
      {/* </FileContext.Provider > */}
    </div>
  );
};

export default App;
