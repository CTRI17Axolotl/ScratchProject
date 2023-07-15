const express = require("express");
const path = require("path");
const app = express();
const router = require('server/routers.js')
const port = process.env.PORT || 8080;

// const publicDirectoryPath = path.join(__dirname, "public");
// app.use(express.static(publicDirectoryPath));

// parse incoming requests
app.use(express.json());

// serve static files

// route handlers
app.use('/', router)



app.get('/', (req, res) => {
  res.status.(200).sendFile(path.join(__dirname, 'index.html'))
});









app.listen(port, () => {
console.log(`Server is listening on port ${port}`)
});


module.exports = app;
