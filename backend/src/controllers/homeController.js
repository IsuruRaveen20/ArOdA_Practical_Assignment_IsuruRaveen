const getHomeContent = (req, res) => {
    const dummyHomeContent = {
        title:"Welcome to Our Website",
        content : "This is Some example content for the Home Page",
    };

    res.json(dummyHomeContent);
};

module.exports = {
    getHomeContent,
};

