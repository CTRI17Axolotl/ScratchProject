import React, { useContext, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StoreContext } from '../routes/dataStore.js';

const FilterButtons = () => {
  const { currentFilters, setCurrentFilters, activeUser } =
    useContext(StoreContext);

  function clickHandler(e) {
    const newToggles = [...currentFilters];
    const sender = e.target.id;
    const [sType, sBtn] = [sender[0], sender[1]];
    if (sType === 0 || sType === 1){ //price, size
      newToggles[sType][sBtn] = !newToggles[sType][sBtn];
    } else if (sType === 2) { //style
      newToggles[2] = [false,false,false,false,false];
      newToggles[2][sBtn] = true;
    } else if (sType === 3) { //fave
      newToggles[3][0] = !currentFilters[3][0];
    } else console.log('Somehow received a wierd click');
    console.log('Writing filter toggles');
    setCurrentFilters(newToggles);
  }

  return (
    <div className='filter-container'>
      <span className='btn-group'></span>
      <span className='btn-group'></span>
      <span className='btn-group'></span>
      {activeUser ? <span className=''></span> : <></>}
    </div>
  );
};

export default FilterButtons;
