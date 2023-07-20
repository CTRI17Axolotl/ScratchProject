const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const { generateSecretKey } = require('../utils/helpers');

const usersController = {};

const secretKey = generateSecretKey();

const verifyToken = (token) => {
  return jwt.verify(token, secretKey);
};

// GET: display the listings of art
// POST: create a new listing
// PATCH: update a listing
// DELETE: delete a listing

usersController.getUser = async (req, res, next) => {
  try {
    // console.log(req.params);
    // console.log('Entering User');
    const { username, password } = req.body;
    // console.log('Req.body: ', req.body);
    const user = await User.findOne({ username: username, password: password });
    res.locals.foundUser = user;
    // console.log('Leaving User');
    return next();
  } catch (err) {
    return next({
      log: `The following error occured: ${err}`,
      status: 400,
      message: { err: 'An error occured while trying to find a user' },
    });
  }
};

usersController.createUser = async (req, res, next) => {
  // console.log('req: ', req.body);
  // format the query using the info passed in on the body

  // console log the received response from the database
  try {
    const { name, email, username, password } = req.body;
    console.log(req.body);
    // const token = req.headers.authorization.split(' ')[1];
    // const decodedToken = verifyToken(token);
    // const userId = decodedToken.userId;
    const newUser = await User.create({
      //userId
      name: name,
      email: email,
      password: password,
      username: username,
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

// usersController.updateFaves = async(req, res, next) => {
// try{
//const { }

// }
// };

// dbController.updateUser = async (req, res, next) => {
//   try {
//     const { name } = req.params;
//     const {
//       newEmail,
//       newAddress,
//       newUserName,
//       newPassword,
//       newSession,
//       newFavorites,
//     } = req.body;

//     const token = req.headers.authorization.split(' ')[1];
//     const decodedToken = verifyToken(token);
//     const userId = decodedToken.userId;

//     const updatedUser = await User.findOneAndUpdate(
//       { firstName: name },
//       {
//         email: newEmail,
//         address: newAddress,
//         username: newUserName,
//         password: newPassword,
//         session: newSession,
//         favorites: newFavorites,
//       },
//       { new: true }
//     );
//     res.locals.updatedUser = updatedUser;
//     return next();
//   } catch (err) {
//     return next({
//       log: `The following error occured: ${err}`,
//       status: 400,
//       message: { err: 'An error occured while trying to update a user' },
//     });
//   }
// };

// dbController.deleteUser = async (req, res, next) => {
//   const { name } = req.params;
//   try {
//     const token = req.headers.authorization.split(' ')[1];
//     const decodedToken = verifyToken(token);
//     const userId = decodedToken.userId;

//     const deletedUser = await User.findOneAndDelete({
//       firstName: name,
//       username: userId,
//     });
//     res.locals.deletedUser = deletedUser;
//     return next();
//   } catch (err) {
//     return next({
//       log: `The following error occured: ${err}`,
//       status: 400,
//       message: { err: 'An error occured while trying to delete a user' },
//     });
//   }
// };

module.exports = usersController;
