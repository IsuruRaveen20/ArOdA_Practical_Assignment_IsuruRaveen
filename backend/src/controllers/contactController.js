const { validationResult } = require('express-validator');
const Contact = require('../models/Contact');

const submitContactForm = async (req, res) => {
    // Perform input validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Input is valid, proceed to save in the database
    try {
        const { name, email, message } = req.body;
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(201).json({ message: 'Contact Form Submitted Successfully' });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while submitting!' });
    }
};

module.exports = {
    submitContactForm,
};