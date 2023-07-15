const express = require('express');
const dbController = require('./dbController.js');

const router = express.Router();


// set up routers

router.get("/", dbController.getListings, (req, res) => {
    res.status(200).json(res.locals.listings)
})

module.exports = router;
