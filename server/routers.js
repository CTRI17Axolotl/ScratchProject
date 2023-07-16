const express = require('express');
const dbController = require('./dbController.js');

const router = express.Router();

router.post('/', dbController.createUser, (req, res) => {
    return res.status(200).json(res.locals.newUser);
})


router.get('/:name', dbController.getUser, (req, res) => {
    return res.status(200).json(res.locals.foundUser);
})

module.exports = router;
