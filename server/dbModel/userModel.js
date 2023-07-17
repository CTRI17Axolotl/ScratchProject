const mongoose = require('mongoose');
const { Schema } = mongoose;



const User = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true }
}, { collection: 'Users' });


module.exports = mongoose.model('User', User);
