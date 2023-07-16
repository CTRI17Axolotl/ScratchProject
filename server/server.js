const express = require("express");
const path = require("path");
const app = express();
const userRouter = require('./routers/userRouter.js')
const itemRouter = require('./routers/itemRouter.js')
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const dotenv = require('dotenv').config(); // required to use process.env.access_key


mongoose.connect(`${process.env.ACCESS_KEY}`, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});


app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use('/users', userRouter);

app.use('/items', itemRouter)


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

app.listen(3000, () => {
  console.log('Listening on 3000')
});