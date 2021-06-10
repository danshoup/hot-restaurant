//Dependencies

const { table } = require('console');
const express = require('express');
const path = require('path');

// Sets up the express App

const app = express();
const PORT = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tables = [];
const waitlist = [];

// Routes:
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));
app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));
app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

app.get('/api/waitlist', (req, res) => res.json(waitlist));

app.get('/api/tables', (req, res) => res.json(tables));

app.post('/api/reserve', (req, res) => {
    const newReserve = req.body;

    newReserve.routeName = newReserve.name;
  
    if (tables.length < 5) {
        tables.push(newReserve);
        res.send(true);
    } else {
        waitlist.push(newReserve)
        res.send(false);
    }
    
  });
  



const handleRequest = (req, res) => {
    
};




// Starts the server to begin listening

app.listen(PORT, () => console.log(`App is listening for HOT reservations on PORT ${PORT}`));