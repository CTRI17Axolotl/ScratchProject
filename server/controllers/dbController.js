const User = require('../dbModel/userModel');
const jwt = require('jsonwebtoken');
const { generateSecretKey } = require('../utils/helpers');

const dbController = {};

const secretKey = generateSecretKey();

const verifyToken = (token) => {
  return jwt.verify(token, secretKey);
};

// GET: display the listings of art
// POST: create a new listing
// PATCH: update a listing
// DELETE: delete a listing

dbController.getUser = async (req, res, next) => {
  try {
    console.log(req.params);
    const { name } = req.params;
    const user = await User.find({ firstName: name });
    res.locals.foundUser = user;
    return next();
  } catch (err) {
    return next({
      log: `The following error occured: ${err}`,
      status: 400,
      message: { err: 'An error occured while trying to find a user' },
    });
  }
};

dbController.createUser = async (req, res, next) => {
  // console.log('req: ', req.body);
  // format the query using the info passed in on the body

  // console log the received response from the database
  const { name, email, address, password, session, favorites } = req.body;
  console.log(req.body);

  // if(!firstName || !lastName || !age){
  //   return next({
  //     log: `The following error occured: missing property`,
  //     status: 400,
  //     message: { err: 'An error occured while trying to create a user' }
  //   });
  // }

  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = verifyToken(token);
    const userId = decodedToken.userId;

    const newUser = await User.create({
      name,
      email,
      address,
      password,
      username: userId,
      session,
      favorites,
    });
    res.locals.newUser = newUser;
    return next();
  } catch (err) {
    return next({
      log: `The following error occured: ${err}`,
      status: 400,
      message: { err: 'An error occured while trying to create a user' },
    });
  }
};

dbController.updateUser = async (req, res, next) => {
  try {
    const { name } = req.params;
    const {
      newEmail,
      newAddress,
      newUserName,
      newPassword,
      newSession,
      newFavorites,
    } = req.body;

    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = verifyToken(token);
    const userId = decodedToken.userId;

    const updatedUser = await User.findOneAndUpdate(
      { firstName: name },
      {
        email: newEmail,
        address: newAddress,
        username: newUserName,
        password: newPassword,
        session: newSession,
        favorites: newFavorites,
      },
      { new: true }
    );
    res.locals.updatedUser = updatedUser;
    return next();
  } catch (err) {
    return next({
      log: `The following error occured: ${err}`,
      status: 400,
      message: { err: 'An error occured while trying to update a user' },
    });
  }
};

dbController.deleteUser = async (req, res, next) => {
  const { name } = req.params;
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = verifyToken(token);
    const userId = decodedToken.userId;

    const deletedUser = await User.findOneAndDelete({
      firstName: name,
      username: userId,
    });
    res.locals.deletedUser = deletedUser;
    return next();
  } catch (err) {
    return next({
      log: `The following error occured: ${err}`,
      status: 400,
      message: { err: 'An error occured while trying to delete a user' },
    });
  }
};

module.exports = dbController;
