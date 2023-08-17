const { validationResult } = require("express-validator");
const Home = require('../models/Home');

const getHomeContent = async(req, res) => {
    try {
        const homeContent = await Home.findOne();
        if (!homeContent) {
            return res.status(404).json({ message: 'No home content found' });
        }
        res.json(homeContent);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while fetching home content' });
    }
};

//Insert Home Section for my data Insertion Purpose
const submitHomeContent = async (req, res) => {
    //perform input validations
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    //Input is valid, process to save ub the database
    try {
        const { heading1, content1, heading2, content2, image } = req.body;
        const newHome = new Home({ heading1, content1, heading2, content2, image });
        await newHome.save();
        res.status(201).json({ message: 'Home Details Submitted Successfully!' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An error occurred while Submitting!..' });
    }
};

module.exports = {
    getHomeContent,
    submitHomeContent,
};

