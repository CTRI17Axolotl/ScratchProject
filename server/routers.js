const express = require('express');
const dbController = require('./dbController.js');

const router = express.Router();


// set up routers

router.get("/:name", dbController.getUser, (req, res) => {
    res.status(200).json(res.locals.foundUser)
})


router.post('/', dbController.createUser, (req, res) => {
    res.status(200).json(res.locals.newUser);
})

module.exports = router;
