//import files

import FeedDisplay from './containers/feedDisplay.jsx';
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import NavBar from './containers/NavBar.jsx';
import createArt from './components/createArt.jsx';
import findArt from './components/findArt.jsx';

const App = () => {
  return (
    <div>
      <NavBar id="navBar"/>
      <FeedDisplay id="feedDisplay"/>

    </div>
  );
};


export default App;
