const mongoose = require('mongoose');
const { Schema } = mongoose;


const Item = new Schema({
  //itemName
  itemName: {type: String, required: true},
  // artist
  artist: { type: String, required: true },
  // link
  image: { type: String, data: Buffer, required: false },
  // description
  description: { type: String, required: false },
  // price
  price: { type: Number, required: true }
});


module.exports = mongoose.model('Item', Item);
