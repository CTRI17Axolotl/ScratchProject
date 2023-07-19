const mongoose = require('mongoose');
const { Schema } = mongoose;

const art = new Schema({
    //artist
    artist: { type: String, required: true },
    //genre
    genre: { type: String, required: true },
    //medium
    medium: { type: String, required: true },
    //size
    dimensions: { 
        length: { type: Number, required: true },
        width: { type: Number, required: true },
        height: { type: Number, required: true },
     },
    //description
    description: { type: String, required: true }
});


module.exports = mongoose.model('Art', art);