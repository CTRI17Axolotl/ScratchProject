//Typical BoilerPlate w/cookies
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

//Routes
const usersRouter = require('./routers/usersRouter.js');
const artPieceRouter = require('./routers/piecesRouter.js');

//Controllers
const usersController = require('./controllers/usersController');
const cookieController = require('./controllers/cookieController');
const sessionController = require('./controllers/sessionController');
const authController = require('./controllers/authenticationController');
const piecesController = require('./controllers/piecesController');

const PORT = process.env.PORT || 3000;
const app = express();

//require utils helper func for key
const { generateSecretKey } = require('./utils/helpers.js');
const secretKey = generateSecretKey();

// const dotenv = require('dotenv').config(); // required to use process.env.access_key

//connect to the database
mongoose.connect(
  'mongodb+srv://aderritt6158:qjxKqRlDpUZ9ZStC@cluster0.rti6q70.mongodb.net/sandbox?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

//json parser and urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//serve static files
app.use('/client', express.static(path.resolve(__dirname, '../client')));

//cookie parser
// app.use(cookieParser());

/**
 * root
 * Upon serving the root path the user will get new cookie from Cookie Controller
 */
app.get('/', cookieController.setCookie, (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

/**
 * signup
 * serve the signup file
 * Might be taken care of on the front end not sure?
 */
app.get('/signup', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/<SignUP PATH HERE>'));
  //check thie signup route
});

//Allows user to create user first then sets an SSID Cookie, then starts a session with the middleware
app.post(
  '/signup',
  usersController.createUser, //creates a user
  cookieController.setSSIDCookie, //sets SSID cookie during signup
  sessionController.startSession, //starts a session during sign up
  (req, res) => {
    res.redirect('/');
    //check this routing logic
    //Should redirect back to login page? Or are we going straight to the home page?
  }
);

/**
 * login
 *
 */
app.post(
  '/login',
  authController.userLogin, //verify's/auths the user logging in
  cookieController.setCookie, //sets a cookie for the logging in user
  sessionController.startSession, //starts a session for the logged in user
  (req, res) => {
    res.redirect('/');
    //redirect to the home page
  }
);

//Authorized Routes below
app.use('/users', usersRouter);
app.use('/pieces', artPieceRouter);

//serve static files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

// Unknown route handler
app.use((req, res) => res.sendStatus(404));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log('Listening on 3000');
});
