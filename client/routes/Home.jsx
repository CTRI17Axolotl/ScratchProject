// Imports
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const App = () => {
  const nav = useNavigate();
  return (
    <div>
      <h1>Hello World</h1>
      <Link to={'user/17'} state={{ test: '45' }}>
        User 17
      </Link>
      <button onClick={() => nav('user/5', { state: 'data' })}>Hello!</button>
    </div>
  );
};

export default App;
