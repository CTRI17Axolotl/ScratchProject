const express = require('express');
// const itemController = require('../controllers/artPieceController.js');
const piecesController = require('../controllers/piecesController.js');

const Art = require('../models/piecesModel.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const allArt = await Art.find(
      {},
      'artist title description image ownerId forSale price priceClass style sizeClass'
    );
    res.status(200).json(allArt);
  } catch (err) {
    return `Error in getting all art: ${err}`;
  }
});

router.put('/:pieceId', piecesController.updateFields, async (req, res) => {
  console.log('fields updated');
  res.status(200).json(res.locals.result);
});

router.post('/', piecesController.createArt, async (req, res) => {
  try {
    console.log('New art created!');
    res.status(200).json(res.locals.newArt);
  } catch (err) {
    return `Error in getting all art: ${err}`;
  }
});

router.patch('/', piecesController.updateArt, (req, res) => {
  res.status(200).send(res.locals.updatedArt);
  return next();
});

//router request for deleting a piece of art
router.delete('/', piecesController.deleteArt, (req, res) => {
  res.status(200).send(res.locals.deletedArt);
  return next();
});

module.exports = router;
