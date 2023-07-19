// Imports
import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Gallery from '../components/Gallery.jsx';
import fakeData from '../components/Placeholder.jsx';
import { StoreContext } from './dataStore.js';

const Home = () => {
  const nav = useNavigate();
  const { fullPieceList, currentFilters, updateFilteredList } =
    useContext(StoreContext); // destructure dataStore vars for use

    // useEffect(() => {
    //   updateFilteredList();
    // }, [fullPieceList, currentFilters]);
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
    </div>
  );
};

export default Home;
