// Imports
import React from 'react';
import { Routes, useParams, useLocation } from 'react-router-dom';

const User = () => {
  const { userId } = useParams();
  const location = useLocation(); //location.state holds state pass
  return (
    <div>
      <h1>This is user {userId}</h1>
    </div>
  );
};

export default User;
