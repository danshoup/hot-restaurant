//Dependencies

const express = require('express');
const path = require('path');

// Sets up the express App

const app = express();
const PORT = 3000;

const handleRequest = (req, res) => {
    
};



// Starts the server to begin listening

app.listen(PORT, () => console.log(`App is listening for HOT reservations on PORT ${PORT}`));