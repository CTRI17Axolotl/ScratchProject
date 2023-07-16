const mongoose = require('mongoose');
const { Schema } = mongoose;


const Item = new Schema({
  // artist
  artist: { type: String, required: true },
  // link
  image: { type: Buffer, required: true },
  // description
  description: { type: String, required: false },
  // price
  price: { type: Number, required: true }
});


module.exports = mongoose.model('Item', Item);
