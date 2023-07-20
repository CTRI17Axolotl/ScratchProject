const mongoose = require('mongoose');
const { Schema } = mongoose;

const Art = new Schema({
  artist: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  ownerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  forSale: { type: Boolean, required: true, default: false },
  price: { type: Number, required: true },
  priceClass: { type: Number, required: true },
  style: {
    type: String,
    required: true,
    enum: ['Realism', 'Modernism', 'Classicalism', 'Photography', 'Sculpture'],
  },
  sizeClass: { type: Number, required: true },
});

module.exports = mongoose.model('Art', Art);
