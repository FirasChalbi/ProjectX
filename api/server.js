const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const carrefourRoutes = require('./routes/carrefour');
const monoprixRoutes = require('./routes/monoprix');
const matchedRoutes = require('./routes/matchedProduct');
const search = require('./routes/search');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

mongoose.connect('mongodb+srv://Firasch:Firasch@cluster0.8fbmhhc.mongodb.net/Stores?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.use('/api/carrefour/products', carrefourRoutes);
app.use('/api/monoprix/products', monoprixRoutes);
app.use('/api/match-products', matchedRoutes);
app.use('/api/search', search)



app.listen(port, () => {
    console.log(`Server is running on ${port}`)
});