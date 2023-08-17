
const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
    heading1: { type: String, required: true },
    content1: { type: String, required: true },
    heading2: { type: String, required: true },
    content2: { type: String, required: true },
    image: { type: String },
});

const Home = mongoose.model('Home', homeSchema);

module.exports = Home;
