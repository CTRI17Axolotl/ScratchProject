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

// ### Pieces

// - Unique ID - ID- autogen? *
// - Image - url / string ?? *
// - Title - String *
// - Artist Name - String *
// - Description Text - String *
// - Owner: UniqueID (ref to user table) *
// - ForSale: Boolean *
// - Price - Num *
// - Collection - (Realism / Modernism / Classicism / Photography / Sculpture) *
// - SizeClass - Int 0/1/2 *
// - L - Num
// - W - Num
// - H - Num

// const Art = new Schema({});
//   //artist
//   artist: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//   //genre
//   genre: { type: String, required: true },
//   //medium
//   medium: { type: String, required: true },
//   //size
//   dimensions: {
//     length: { type: Number, required: true },
//     width: { type: Number, required: true },
//     height: { type: Number, required: true },
//   },
//   //title
//   title: { type: String, required: true },
//   //description
//   description: { type: String, required: true },
//   //image URL
//   image: { type: String, required: true },
//   //OG Owner
//   owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//   //Current Buyer
//   buyer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//   //Current Seller
//   seller: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//   //Status of sale
//   forSale: { type: Boolean, required: true, default: false },

//   price: { type: Number, required: true },
//   collection: {
//     type: String,
//     required: true,
//     enum: ['Realism', 'Modernism', 'Classicalism', 'Photography', 'Sculpture'],
//   },
// });

module.exports = mongoose.model('Art', Art);
