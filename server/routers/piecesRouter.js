const express = require('express');
// const itemController = require('../controllers/artPieceController.js');
const piecesController = require('../controllers/piecesController.js');

const router = express.Router();

//router for post requests to create a new art piece routing to artPieceController createArt method
router.post('/', piecesController.createArt, (req, res) => {
  res.status(200).json(res.locals.newArt);
  return next();
});

//router for get requests routing to artPieceController on the getArt method
router.get('/', piecesController.getArt, (req, res) => {
  res.status(200).send(res.locals.foundArt);
  return next();
});

//router for patch requests sending to the artPieceController updateArt method
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
