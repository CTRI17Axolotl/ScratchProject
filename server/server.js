const express = require("express");
const path = require("path");
const app = express();
const router = require('./routers.js')
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://wadechadwick13:0BQS7MP6tDtJVbNc@scratchproject.d8nmjyq.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});


app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use('/users', router);






app.listen(3000, () => {
  console.log('Listening on 3000')
});