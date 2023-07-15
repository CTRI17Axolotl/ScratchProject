const express = require("express");
const path = require("path");
const app = express();
const router = require('./routers.js')
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');

// const publicDirectoryPath = path.join(__dirname, "public");
// app.use(express.static(publicDirectoryPath));

mongoose.connect('mongodb+srv://wadechadwick13:m1ScvSA6ygHJepDO@scratchproject.d8nmjyq.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

app.use(express.urlencoded({ extended: true }));


// parse incoming requests
app.use(express.json());

// serve static files

// route handlers
app.use('/users', router)



app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'index.html'))
});



app.listen(port, () => {
console.log(`Server is listening on port ${port}`)
});


module.exports = app;
