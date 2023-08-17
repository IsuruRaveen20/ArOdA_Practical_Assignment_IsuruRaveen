// src/controllers/flavorsController.js
const getFlavorsContent = (req, res) => {
    const dummyFlavorsContent = {
        title: "Our Delicious Flavors",
        content: "Explore a variety of mouthwatering flavors.",
    };

    res.json(dummyFlavorsContent);
};

module.exports = {
    getFlavorsContent,
};
