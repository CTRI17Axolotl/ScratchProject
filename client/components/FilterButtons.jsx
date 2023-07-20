import React, { useContext, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StoreContext } from '../routes/dataStore.js';

const FilterButtons = () => {
  const { currentFilters, setCurrentFilters, activeUser } =
    useContext(StoreContext);

  const [styleBtns, setStyleBtns] = useState([]);
  const [faveBtns, setFaveBtns] = useState([]);
  const [priceBtns, setPriceBtns] = useState([]);
  const [sizeBtns, setSizeBtns] = useState([]);

  function clickHandler(e) {
    const newToggles = [...currentFilters];
    const sender = e.target.id;
    console.log('Filter clicked: ', sender);
    const [sType, sBtn] = [Number(sender[0]), Number(sender[1])];
    console.log('click:', sType, sBtn);
    if (sType === 0 || sType === 1) {
      //price, size
      console.log('run 0/1:', newToggles[sType][sBtn]);
      newToggles[sType][sBtn] = !newToggles[sType][sBtn];
    } else if (sType === 2) {
      //style
      newToggles[2] = [false, false, false, false, false];
      if (!currentFilters[2][sBtn]) newToggles[2][sBtn] = true;
    } else if (sType === 3) {
      //fave
      newToggles[3][0] = !currentFilters[3][0];
    } else console.log('Somehow received a wierd click');
    console.log('Writing filter toggles:', newToggles);
    setCurrentFilters(newToggles);
  }

  useEffect(() => {
    const [newStyleBtns, newFaveBtns, newPriceBtns, newSizeBtns] = [
      [],
      [],
      [],
      [],
    ];
    // Style Buttons
    currentFilters[2].forEach((val, index) => {
      const newBtn = (
        <a
          className={currentFilters[2][index] ? 'filter active' : 'filter'}
          id={`2${index}`}
          key={`filter2${index}`}
          onClick={clickHandler}
        >
          {
            ['Realism', 'Modernism', 'Classicism', 'Photography', 'Sculpture'][
              index
            ]
          }
        </a>
      );
      newStyleBtns.push(newBtn);
    });
    // Fave Button
    const newFaveBtn = (
      <a
        className={currentFilters[3][0] ? 'filter active' : 'filter'}
        id={`3${0}`}
        key={`filter3${0}`}
        onClick={clickHandler}
      >
        ♥
      </a>
    );
    // Price Buttons
    newFaveBtns.push(newFaveBtn);
    currentFilters[0].forEach((val, index) => {
      const newBtn = (
        <a
          className={currentFilters[0][index] ? 'filter active' : 'filter'}
          id={`0${index}`}
          key={`filter0${index}`}
          onClick={clickHandler}
        >
          {['$', '$$', '$$$'][index]}
        </a>
      );
      newPriceBtns.push(newBtn);
    });
    // Size Buttons
    currentFilters[1].forEach((val, index) => {
      const newBtn = (
        <a
          className={currentFilters[1][index] ? 'filter active' : 'filter'}
          id={`1${index}`}
          key={`filter1${index}`}
          onClick={clickHandler}
        >
          {['S', 'M', 'L'][index]}
        </a>
      );
      newSizeBtns.push(newBtn);
    });
    setStyleBtns(newStyleBtns);
    setFaveBtns(newFaveBtns);
    setPriceBtns(newPriceBtns);
    setSizeBtns(newSizeBtns);
  }, [currentFilters, activeUser]);

  return (
    <div className="filter-buttons-container">
      <span className="btn-group">{styleBtns}</span>
      {activeUser ? <span className="btn-group">{faveBtns}</span> : <></>}
      <span className="btn-group">{priceBtns}</span>
      <span className="btn-group">{sizeBtns}</span>
    </div>
  );
};

export default FilterButtons;
