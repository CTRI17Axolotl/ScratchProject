const mongoose = require('mongoose');
const { Schema } = mongoose;

const Art = new Schema({
  artist: { type: String, required: false, default: 'unkown' },
  title: { type: String, required: true, default: 'untitled' },
  description: { type: String, required: false },
  image: { type: String, required: false, default: '?' },
  ownerId: { type: String, required: false },
  forSale: { type: Boolean, required: false, default: false },
  price: { type: Number, required: false },
  priceClass: { type: Number, required: false },
  style: { type: String, required: false },
  sizeClass: { type: Number, required: false },
});

module.exports = mongoose.model('Art', Art);
