const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
    content1: { type: String, required: true },
    content2: { type: String, required: true },
    content3: { type: String, required: true },
});

const About = mongoose.model('About', aboutSchema);

module.exports = About;