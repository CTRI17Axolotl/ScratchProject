const express = require('express');
// const itemController = require('../controllers/artPieceController.js');
const artPieceController = require('../controllers/artPieceController.js');

const router = express.Router();

//router for post requests to create a new art piece routing to artPieceController createArt method
router.post('/', artPieceController.createArt, (req, res) => {
  return res.status(200).json(res.locals.newArt);
});

//router for get requests routing to artPieceController on the getArt method
router.get('/', artPieceController.getArt, (req, res) => {
  return res.status(200).send(res.locals.foundArt);
});

//router for patch requests sending to the artPieceController updateArt method
router.patch('/', artPieceController.updateArt, (req, res) => {
  return res.status(200).send(res.locals.updatedArt);
});

//router request for deleting a piece of art
router.delete('/', artPieceController.deleteArt, (req, res) => {
  return res.status(200).send(res.locals.deletedArt);
});

module.exports = router;
