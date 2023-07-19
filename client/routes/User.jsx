// Imports
import React, { useContext } from 'react';
import { Routes, useParams, useLocation } from 'react-router-dom';
import { StoreContext } from './dataStore.js';

const User = () => {
  const { userId } = useParams();
  const location = useLocation(); //location.state holds state pass
  const { testState } = useContext(StoreContext); // destructure dataStore vars for use

  return (
    <div>
      <h1>This is user {userId}</h1>
    </div>
  );
};

export default User;
