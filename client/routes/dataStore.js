import React, { useState } from 'react';

export const StoreContext = React.createContext('null');

export default ({ children }) => {

// Store State Data

const [fullPieceList, setFullPieceList] = useState([]); // full list
const [userList, setUserList] = useState([]); // user list
const [activeUser, setActiveUser ] = useState(false); // logged in user
const [currentFilters, setCurrentFilters] = useState([[false,false,false],[false,false,false],[false,false,false,false,false],[false]]); // filters
    // filter price, size, collection, faved
const [filteredPieceList, setFilteredPieceList] = useState([]); // filt.pieces
const [currentPieceFocus, setCurrentPieceFocus] = useState(false); // focus.pc

// Store Update Functions
const saveFetchedList = (list) => {
  set
}

// Component-Accessible Store Values
  const store = {
    saveFetchedList: saveFetchedList, // update fetched list
    userList: userList, // 
  };
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
