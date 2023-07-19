// Imports
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Gallery from '../components/Gallery.jsx';
import fakeData from '../components/Placeholder.jsx';

const App = () => {
  const nav = useNavigate();

  return (
    <div className="base-container">
      <h1>Stork Art Fair</h1>
      <Gallery pieceList={fakeData.data}></Gallery>
      <Link to={'user/17'} state={{ test: '45' }}>
        User 17
      </Link>
      <button onClick={() => nav('signin', { state: 'data' })}>
        Sign in here!
      </button>
      <button onClick={() => nav('addPiece', { state: 'data' })}>
        Upload Piece here!
      </button>
    </div>
  );
};

export default App;
