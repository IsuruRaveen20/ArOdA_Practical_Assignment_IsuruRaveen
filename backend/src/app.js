const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

app.use(bodyParser.json());

const dbConnection = mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

dbConnection.then(() => {
    console.log('Database connected successfully');
    // Get the connected database name
    const dbName = mongoose.connection.name;
    console.log('Connected to database:', dbName);
}).catch((error) => {
    console.error('Database connection error:', error);
});

const productRoutes = require('./routes/productsRoutes');
const contactRoutes = require('./routes/contactRoutes');
const aboutRoutes = require('./routes/aboutRoutes');
const homeRoutes = require('./routes/homeRoutes');
const flavourRoutes = require('./routes/flavorsRoutes');



app.use('/api/product', productRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/about', aboutRoutes);
app.use('/api/home', homeRoutes);
app.use('/api/flavour', flavourRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
