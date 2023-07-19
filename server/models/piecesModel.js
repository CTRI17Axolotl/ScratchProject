const mongoose = require('mongoose');
const { Schema } = mongoose;

const Art = new Schema({
  artist: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  genre: { type: String, required: true },
  medium: { type: String, required: true },
  dimensions: {
    length: { type: Number, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
  },
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  buyer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  seller: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  forSale: { type: Boolean, required: true, default: false },
  price: { type: Number, required: true },
  style: {
  type: String,
  required: true,
  enum: ['Realism', 'Modernism', 'Classicalism', 'Photography', 'Sculpture'],
  },
});

module.exports = mongoose.model('Art', Art);
