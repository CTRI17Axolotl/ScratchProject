import React, { useEffect, useState } from 'react';
import Piece from './Piece.jsx';
import { motion, AnimatePresence } from 'framer-motion';

// Gallery drills pieceList prop
const Gallery = ({ pieceList }) => {
  const [pieceViews, setPieceViews] = useState([]);

  useEffect(() => {
    const newPieceViews = [];
    pieceList.forEach((element) => {
      const newPieceView = <Piece pieceData={element} key={element._id} />;
      newPieceViews.push(newPieceView);
    });
    setPieceViews(newPieceViews);
  }, []);

  return (
    <div className="center-container">
      <div className="gallery-container">
        <AnimatePresence>{pieceViews}</AnimatePresence>
      </div>
    </div>
  );
};
export default Gallery;
