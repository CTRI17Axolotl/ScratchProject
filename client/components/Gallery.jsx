import React, { useContext, useEffect, useState } from 'react';
import Piece from './Piece.jsx';
import { motion, AnimatePresence } from 'framer-motion';
import { StoreContext } from '../routes/dataStore.js';

// Gallery drills pieceList prop
const Gallery = ({ pieceList }) => {
  const [pieceViews, setPieceViews] = useState([]);
  const { userList, setUserList, activeUser, userFaves, setUserFaves } =
    useContext(StoreContext);

  useEffect(() => {
    const newPieceViews = [];
    pieceList.forEach((element, index) => {
      const pieceCopy = { ...element };
      const isFaved = userFaves.includes(element._id) ? true : false;

      const newPieceView = (
        <Piece
          pieceData={pieceCopy}
          pieceIndex={index}
          isFaved={isFaved}
          setFave={setFave}
          key={element._id}
        />
      );
      newPieceViews.push(newPieceView);
    });
    setPieceViews(newPieceViews);
  }, [userFaves]);

  const setFave = (piece, setAsFave) => {
    const thisPieceId = pieceList[piece]._id;
    console.log(
      'Trying to set a favorite piece ',
      activeUser,
      piece,
      thisPieceId,
      setAsFave
    );
    if (activeUser) {
      const userIndex = userList.findIndex((el) => el._id === activeUser);
      const newUserFaves = [...userList[userIndex].favorites];
      if (setAsFave) {
        if (!newUserFaves.includes(piece)) newUserFaves.push(thisPieceId);
      } else {
        newUserFaves.splice(newUserFaves.indexOf(thisPieceId), 1);
      }
      setUserFaves(newUserFaves);
    }
  };

  return (
    <div className="center-container">
      <div className="gallery-container">
        <AnimatePresence>{pieceViews}</AnimatePresence>
      </div>
    </div>
  );
};
export default Gallery;
