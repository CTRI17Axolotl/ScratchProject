import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Piece = ({ pieceData }) => {
  return (
    <motion.div
      layout
      id={'piece' + pieceData.itemId}
      key={'piece' + pieceData.itemId}
      className="piece-container"
    >
      <div className="piece-image-container">
        <img src={pieceData.image} className="piece-image" />
      </div>
      <div className="piece-content">
        <div className="piece-text">
          <p>{pieceData.title}</p>
          <p>{'by '+pieceData.artist}</p>
          <p>{pieceData.forSale ? 'Price: $'+pieceData.price : 'Not for Sale'}</p>
          {/* <p>
            {pieceData.forSale
              ? 'For Sale by ' + pieceData.ownerId
              : 'List by ' + pieceData.ownerId}
          </p> */}
        </div>
        <div className="piece-buttons">
          {pieceData.isFave ? <p>"❤️"</p> : <p>"🖤"</p>}
          {pieceData.isOwner ? <p>Edit</p> : <p>--</p>}
        </div>
      </div>
    </motion.div>
  );
};

export default Piece;
