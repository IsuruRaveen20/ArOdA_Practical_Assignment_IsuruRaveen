const { validationResult } = require('express-validator');
const About = require('../models/About');

const getAboutContent = async (req, res) => {
    try {
        // Find the about content from the database
        const aboutContent = await About.findOne();

        // If no content is found, return a message
        if (!aboutContent) {
            return res.status(404).json({ message: 'No about content found' });
        }

        // Return the retrieved about content
        res.json(aboutContent);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while fetching about content' });
    }
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
