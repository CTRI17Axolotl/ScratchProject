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
    userList,
    userFaves,
    palette,
    setPalette,
    numberOfPalettes,
    updateFavorites,
    pushFavorites,
  } = useContext(StoreContext); // destructure dataStore vars for use

  useEffect(() => {
    // palette -> update background
    document.body.style.backgroundImage = `url('${backgrounds.home[palette]}')`;
  }, [palette]);

  // useEffect(() => {
  //   // mod user list (new, fav-changes) -> update current faves
  //   updateFavorites();
  // }, [userList, activeUser]);

  // useEffect(() => {
  //   // change current faves -> push changes
  //   pushFavorites();
  // }, [userFaves]);

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
          console.log('Received User directory: ', parsedUsers);
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

  const nextPalette = () => {
    const newPalette = palette > numberOfPalettes - 2 ? 0 : palette + 1;
    setPalette(newPalette);
  };

  useEffect(() => {
    const appContainer = document.getElementById('app-container');
    for (let i = 0; i < numberOfPalettes; i++) {
      appContainer.classList.remove('pal' + i);
    }
    appContainer.classList.add('palette' + palette);
    console.log('Current clases: ', appContainer.classList);
  }, [palette]);

  return (
    <div className="base-container">
      <div className="header-container">
        <button
          className="btn palette"
          title="Change Palette"
          onClick={() => nextPalette()}
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
