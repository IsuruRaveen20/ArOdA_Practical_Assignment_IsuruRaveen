const { validationResult } = require('express-validator');
const Flavour = require('../models/Flavour');

const getFlavours = async (req, res) => {
    try {
        // Fetch all flavors from the database
        const flavors = await Flavour.find();

        // If no flavors are found, return a message
        if (!flavors.length) {
            return res.status(404).json({ message: 'No flavors found' });
        }

        // Return the retrieved flavors
        res.json(flavors);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while fetching flavors' });
    }
};

//Insert About Section for my data Insertion Purpose
const submitFlavour = async (req, res) => {
    // Perform input validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Input is valid, proceed to save in the database
    try {
        const { name, description, image } = req.body;
        const newFlavour = new Flavour({ name, description, image });
        await newFlavour.save();
        res.status(201).json({ message: 'Flavour Details Submitted Successfully' });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while submitting!' });
    }
}

module.exports = {
    getFlavours,
    submitFlavour,
};
