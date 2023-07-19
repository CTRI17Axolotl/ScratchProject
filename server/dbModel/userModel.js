const mongoose = require('mongoose');
const { Schema } = mongoose;

// ### Users
// - Unique ID - number /autogen
// - Name - string 
// - Password (Hashed + Salt) - string
// - Session  - 
// - Contact Email - string
// - List of Favorites [UniqueId, UniqueId, ... ] - array of Unique Ids

const User = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  password: { type: String, required: true },
  
 
}, { collection: 'Users' });


module.exports = mongoose.model('User', User);
