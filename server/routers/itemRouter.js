const express = require('express');
const itemController = require('../controllers/itemController.js');

const router = express.Router();

router.post('/', itemController.createItem, (req, res) => {
  return res.status(200).json(res.locals.newItem);
});

router.get('/', itemController.getItem, (req, res) => {
  return res.status(200).send(res.locals.foundItem);
});

router.patch('/', itemController.updateItem, (req, res) => {
  return res.status(200).send(res.locals.updatedItem);
});

router.delete('/', itemController.deleteItem, (req, res) => {
  return res.status(200).send(res.locals.deletedItem);
});

module.exports = router;
