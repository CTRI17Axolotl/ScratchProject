const express = require('express');
const dbController = require('../controllers/dbController.js');

const router = express.Router();

router.post('/', dbController.createUser, (req, res) => {
    return res.status(200).json(res.locals.newUser);
})


router.get('/:name', dbController.getUser, (req, res) => {
    return res.status(200).send(res.locals.foundUser);
})

router.patch('/:name', dbController.updateUser, (req, res) => {
    return res.status(200).send(res.locals.updatedUser);
})

router.delete('/:name', dbController.deleteUser, (req, res) => {
    return res.status(200).send(res.locals.deletedUser);
})

module.exports = router;
