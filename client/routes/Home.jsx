// Imports
import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Gallery from '../components/Gallery.jsx';
import FilterButtons from '../components/FilterButtons.jsx';
import { StoreContext } from './dataStore.js';
import backgrounds from '../components/Backgrounds.js';

// import fakeData from '../components/Placeholder.jsx';

const Home = () => {
  const nav = useNavigate();
  const {
    fullPieceList,
    currentFilters,
    filteredPieceList,
    updateFilteredList,
    setFullPieceList,
    setCurrentFilters,
    activeUser,
    setUserList,
    pallet,
    setPallet,
    numberOfPallets,
  } = useContext(StoreContext); // destructure dataStore vars for use

  useEffect(() => {
    document.body.style.backgroundImage = `url('${backgrounds.home[pallet]}')`;
  }, [pallet]);

  useEffect(() => {
    if (true) {
      const fetchPieces = async () => {
        try {
          const response = await fetch('/pieces', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const incomingPieces = await response.json();
          const parsedPieces = JSON.parse(JSON.stringify(incomingPieces));
          console.log('Received Piece directory: ', parsedPieces);
          setFullPieceList(parsedPieces);
        } catch (err) {
          console.log('Error fetching Pieces: ', err);
        }
      };
      const fetchUsers = async () => {
        try {
          const response = await fetch('/users', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const incomingUsers = await response.json();
          const parsedUsers = JSON.parse(JSON.stringify(incomingUsers));
          // console.log('Received User directory: ', parsedUsers);
          setUserList(parsedUsers);
        } catch (err) {
          console.log('Error fetching Users: ', err);
        }
      };
      fetchPieces();
      fetchUsers();
    } else {
      console.log('setting list in 1s');
      setTimeout(() => {
        console.log('timeout');
        setFullPieceList(fakeData.data);
      }, 1000);
    }
  }, []);

  useEffect(() => {
    console.log('calling filter with list ', fullPieceList, currentFilters);
    updateFilteredList();
  }, [fullPieceList, currentFilters]);

  const nextPallet = () => {
    const newPallet = pallet > numberOfPallets - 2 ? 0 : pallet + 1;
    setPallet(newPallet);
  };

  useEffect(() => {
    const appContainer = document.getElementById('app-container');
    for (let i = 0; i < numberOfPallets; i++) {
      appContainer.classList.remove('pallet' + i);
    }
    appContainer.classList.add('pallet' + pallet);
    console.log('Current clases: ', appContainer.classList);
  }, [pallet]);

  return (
    <div className="base-container">
      <div className="header-container">
        <button
          className="btn pallet"
          title="Change Pallet"
          onClick={() => nextPallet()}
        >
          <i className="bi bi-palette-fill" />
        </button>
        <h1>Stork Art Fair</h1>
        <div>
          {activeUser ? (
            <button
              className="btn add-piece"
              title="Submit New Art"
              onClick={() => nav('addPiece')}
            >
              <i className="bi bi-plus-square" />
            </button>
          ) : (
            <button
              className="btn sign-in"
              title="Sign In or New Account"
              onClick={() => nav('signin')}
            >
              <i className="bi bi-person-fill" />
            </button>
          )}
        </div>
      </div>
      {/* <div style={{ textAlign: 'center' }}>
        <span>
          <button onClick={() => nextPallet()}>Next Pallet</button>
        </span>
        <span>
          <button onClick={() => nav('addPiece')}>Add Piece</button>
        </span>
      </div> */}

      <FilterButtons key={'filt' + currentFilters} />
      <Gallery
        pieceList={filteredPieceList}
        key={'filtered' + filteredPieceList.length + currentFilters}
      ></Gallery>
      {/* <Link to={'user/17'} state={{ test: '45' }}>
        User 17
      </Link>
      <button onClick={() => nav('signin', { state: 'data' })}>
        Sign in here!
      </button> */}
    </div>
  );
};

export default Home;
