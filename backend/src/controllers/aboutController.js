const { validationResult } = require('express-validator');
const About = require('../models/About');

const getAboutContent = (req, res) => {
    const dummyAboutContent = {
        title: "About Us",
        content: "Learn more about our history and values.",
    };

    res.json(dummyAboutContent);
};

//Insert About Section for my data Insertion Purpose
const submitAboutContent = async (req, res) => {
    // Perform input validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Input is valid, proceed to save in the database
    try {
        const { content1, content2, content3 } = req.body;
        const newAbout = new About({ content1, content2, content3 });
        await newAbout.save();
        res.status(201).json({ message: 'About Details Submitted Successfully' });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while submitting!' });
    }
}
module.exports = {
    getAboutContent,
    submitAboutContent,
};
