// src/controllers/aboutController.js
const getAboutContent = (req, res) => {
    const dummyAboutContent = {
        title: "About Us",
        content: "Learn more about our history and values.",
    };

    res.json(dummyAboutContent);
};

module.exports = {
    getAboutContent,
};
