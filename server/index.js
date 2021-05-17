
const express = require('express');
const mongoose = require('mongoose'); 
const cors = require('cors');

const houses = require('./routes/houses');

// Init Express
const app = express();
app.use(cors());

// Apply Middleware
app.use(express.json());

app.get('/', (req,res) => {
    res.send('Welcome to house listing API');
});

// When a use visits this address, send them to this route
app.use('/api/houses', houses); 

require('dotenv').config();

const port = process.env.PORT || 3000;

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.kiooe.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(result => {
        app.listen(port, () => console.log(`Server is running on port ${port}`));
    })
    .catch(err => console.log(err)) 

