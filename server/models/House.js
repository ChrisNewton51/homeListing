const mongoose = require('mongoose');

const HouseSchema = new mongoose.Schema({
    title: {type: String, requried: true},
    address: {type: String, required: true},
    homeType: String, 
    description: String,
    price: {type: Number, required: true},
    image: String,
    yearBuilt: Number
});

// Export instance of the schema
module.exports = mongoose.model('House', HouseSchema);