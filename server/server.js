//Typical BoilerPlate w/cookies
const express = require('express');
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 3000;

//Routes
const userRouter = require('./routers/userRouter.js');
const artPieceRouter = require('./routers/artPieceRouter.js');

//require utils helper func for key
const { generateSecretKey } = require('./utils/helpers.js');

const secretKey = generateSecretKey();

//require mongoose
const mongoose = require('mongoose');

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

//cookie parser
app.use(cookieParser());

app.use('/users', userRouter);
app.use('/items', artPieceRouter);

//serve static files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
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
