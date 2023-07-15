const mongoose = require('mongoose');
const { Schema } = mongoose;



const user = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true }
})


module.exports = mongoose.model('User', user);
