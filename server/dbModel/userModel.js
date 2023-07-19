const mongoose = require('mongoose');
const { Schema } = mongoose;

// ### Users
// - Unique ID - number /autogen
// - Name - string
// - Password (Hashed + Salt) - string
// - Session  -
// - Contact Email - string
// - List of Favorites [UniqueId, UniqueId, ... ] - array of Unique Ids

const User = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    username: { type: String, required: true },
    password: {
      hash: { type: String, required: true },
      salt: { type: String, required: true },
    },
    session: { type: String, required: false },
    favorites: { type: Array, required: true },
  },
  { collection: 'Users' }
);

module.exports = mongoose.model('User', User);
