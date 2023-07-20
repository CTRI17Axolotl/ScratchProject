import React, { useState, useEffect } from 'react';

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
  const [activeUser, setActiveUser] = useState(false); // logged in userfalse
  const updateFullPieceList = (list) => {
    setFullPieceList(list);
    updateFilteredList(list);
  };

  const updateFilteredList = (list = fullPieceList) => {
    console.log('filtering with list: ', list);
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
        ].indexOf(el.collection);
        if (currentFilters[2][thisElCollec] == false) return false;
      }
      if (currentFilters[3][0] && activeUser) {
        //only show faves
        if (!currentUserFaves.includes(el.pieceId)) return false;
      }
      return true;
    });
    console.log('Updated filter list: ', newFilteredPieceList);
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
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
