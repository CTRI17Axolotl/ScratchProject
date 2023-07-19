const express = require('express');

//import Controllers
const dbController = require('../controllers/dbController.js');
const authController = require('../controllers/authenticationController');

//initialize our router
const router = express.Router();

//post request for a login page, authController for authenticating users
router.post('/login', authController.userLogin);

//post request router for signup page as well as authenticating users
router.post('/signup', authController.userSignUp);

//at the root path create a user
router.post('/', dbController.createUser, (req, res) => {
  return res.status(200).json(res.locals.newUser);
});

//with a req.params of name get user from dbController
router.get('/:name', dbController.getUser, (req, res) => {
  return res.status(200).send(res.locals.foundUser);
});

//patch request with a req.params of name updateUser on the dbController
router.patch('/:name', dbController.updateUser, (req, res) => {
  return res.status(200).send(res.locals.updatedUser);
});

//router with a request params of name to dbController to deleteUser
router.delete('/:name', dbController.deleteUser, (req, res) => {
  return res.status(200).send(res.locals.deletedUser);
});

module.exports = router;
