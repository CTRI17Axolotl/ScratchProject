import React, { useState } from 'react';

export const StoreContext = React.createContext('null');

export default ({ children }) => {
  // Store State Data
  const [fullPieceList, setFullPieceList] = useState([]); // full list
  const [filteredPieceList, setFilteredPieceList] = useState([]); // filt.pieces
  // const [userFaveList, setUserFaveList] = useState([]); // userId's faves
  // const [userOwnList, setUserOwnList] = useState([]); // userId's owned
  const [currentFilters, setCurrentFilters] = useState([
    [false, false, false],
    [false, false, false],
    [false, false, false, false, false],
    [false],
  ]); // filters
  // filter price, size, collection, faved
  const [currentPieceFocus, setCurrentPieceFocus] = useState(false); // focus.pc
  const [userList, setUserList] = useState([]); // user list
  const [activeUser, setActiveUser] = useState(false); // active user
  const [userFaves, setUserFaves] = useState([]);
  const [focusPieceFilterIndex, setFocusPieceFilterIndex] = useState();

  const updateFullPieceList = (list) => {
    setFullPieceList(list);
    updateFilteredList(list);
  };
  const [palette, setPalette] = useState(0);
  const numberOfPalettes = 4;

  // const updateFavorites = (user, piece, status) => {
  //   if (user) {
  //     // got called from gallery with specifics
  //     const newUserFaves = [...userFaves];
  //     if (status) {
  //       newUserFaves.push(piece);
  //     } else {
  //       newUserFaves.splice(newUserFaves.indexOf(piece), 1);
  //     }
  //     console.log('setting new user faves', newUserFaves);
  //     setUserFaves(newUserFaves);
  //   } else {
  //     // check for active, build list from their favorites
  //     if (activeUser) {
  //       const userData = userList.find((el) => el._id === activeUser);
  //       setUserFaves(userData.favorites);
  //     }
  //   }
  // };

  const pushFavorites = async () => {
    if (false) {
      try {
        const response = await fetch('/users/updateFaves', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user: activeUser,
            favorites: userFaves,
          }),
        });
        const responseParsed = await response.json();
        console.log('Tried to update favorites, response: ', responseParsed);
      } catch {
        console.log(
          'some communication issue with updating favorites proceed locally'
        );
      }
    }
  };

  // const getUserFavorites = async (newActiveUser) => {
  //   setActiveUserState(newActiveUser);
  //   const userPositionInList = userList.findIndex(
  //     (el) => el._id === newActiveUser
  //   );
  //   if (userPositionInList >= 0) {
  //     const thisUserFaves = userList[userPositionInList].favorites;
  //     setUserList(thisUserFaves);
  // };

  const updateFilteredList = (list = fullPieceList) => {
    // console.log('filtering with list: ', list);
    const currentPieceList = [...list];
    let currentUserFaves;
    if (currentFilters[3][0] && activeUser) {
      //only show faves
      currentUserFaves = userList.find(
        (el) => el.userId === activeUser
      ).favorites;
    }
    const newFilteredPieceList = currentPieceList.filter((el) => {
      if (currentFilters[0].includes(true)) {
        //care about price
        if (currentFilters[0][el.priceClass] === false) return false;
      }
      if (currentFilters[1].includes(true)) {
        //care about size (!)
        if (currentFilters[1][el.sizeClass] === false) return false;
      }
      if (currentFilters[2].includes(true)) {
        //care about collection
        const thisElCollec = [
          'Realism',
          'Modernism',
          'Classicism',
          'Photography',
          'Sculpture',
        ].indexOf(el.style);
        // console.log('Filtering style choice ',thisElCollec);
        if (currentFilters[2][thisElCollec] == false) return false;
      }
      if (currentFilters[3][0] && activeUser) {
        //only show faves
        if (!currentUserFaves.includes(el.pieceId)) return false;
      }
      return true;
    });
    // console.log('Updated filter list: ', newFilteredPieceList);
    // setFilteredPieceList(newFilteredPieceList);
    setFilteredPieceList(randomize(newFilteredPieceList)); // shuffle each time?
  };

  const randomize = (array) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };

  // Component-Accessible Store Values
  const store = {
    setFullPieceList: updateFullPieceList, // update fetched list
    filteredPieceList: filteredPieceList, // gallery display list
    updateFilteredList: updateFilteredList,
    currentFilters: currentFilters,
    setCurrentFilters: setCurrentFilters,
    currentPieceFocus: currentPieceFocus,
    setCurrentPieceFocus: setCurrentPieceFocus,
    userList: userList, //
    setUserList: setUserList,
    activeUser: activeUser,
    setActiveUser: setActiveUser,
    userFaves: userFaves,
    setUserFaves: setUserFaves,
    palette: palette,
    setPalette: setPalette,
    numberOfPalettes: numberOfPalettes,
    focusPieceFilterIndex: focusPieceFilterIndex,
    setFocusPieceFilterIndex: setFocusPieceFilterIndex,
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
