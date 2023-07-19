const express = require('express');
// const itemController = require('../controllers/artPieceController.js');
const artPieceController = require('../controllers/artPieceController.js');

const router = express.Router();

router.post('/', artPieceController.createArt, (req, res) => {
  return res.status(200).json(res.locals.newArt);
});

router.get('/', artPieceController.getArt, (req, res) => {
  return res.status(200).send(res.locals.foundArt);
});

router.patch('/', artPieceController.updateArt, (req, res) => {
  return res.status(200).send(res.locals.updatedArt);
});

router.delete('/', artPieceController.deleteArt, (req, res) => {
  return res.status(200).send(res.locals.deletedArt);
});

module.exports = router;
