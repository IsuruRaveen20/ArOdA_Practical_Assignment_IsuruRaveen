const mongoose = require('mongoose');

const flavourSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: String, required: true },

});

const Flavour = mongoose.model('Flavour', flavourSchema);

module.exports = Flavour;
