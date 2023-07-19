// Imports
import React from 'react';
import { Routes, useParams, useLocation } from 'react-router-dom';

const User = () => {
  const { userId } = useParams();
  const location = useLocation();
  console.log(location.state);
  return (
    <div>
      <h1>This is user {userId}</h1>
    </div>
  );
};

export default User;
