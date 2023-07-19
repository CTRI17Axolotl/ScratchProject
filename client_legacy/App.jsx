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

// const App = () => {
//   return (
//     <div>
//       <NavBar />
//       <Routes>
//           <Route path="/createArt" element={<createArt />} />
//           <Route path="/findArt" element={<findArt />} />
//           <Route path="/updateArt" element={<updateArt />}/>
//           <Route path="/deleteArt" element={<deleteArt />} />
//         </Routes>

//            </div>
//   );
// };

export default App;
