const express = require('express');
const app = express();
const cors = require('cors');
const nconf = require('nconf');
const connectDB = require('./services/database');
const bodyParser = require('body-parser');

// connect to the database
connectDB();

// loads environment variables, if any
nconf.argv().env();

const port = process.env.port || 3002;

// use express middleware
app.use(cors());
app.use(express.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));

// route for team details
app.use('/api/team', require('./routes/team'));

// route for achievements details
app.use('/api/achievements', require('./routes/achievements'));

// route for cars details
app.use('/api/cars', require('./routes/cars'));

// route for sponsors details
app.use('/api/sponsors', require('./routes/sponsors'));

// buffer route
app.get('*', (req, res) => {
    res.send('Glad you\'re trying');
});

// listen on the port
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
}); 
