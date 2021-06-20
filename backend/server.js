const express = require('express');
const app = express();
const cors = require('cors');
const nconf = require('nconf');

// loads environment variables, if any
nconf.argv().env();

const port = process.env.port || 3002;

// use express middleware
app.use(cors);
app.use(express.json({ extended: false }));

// listen on the port
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
}); 
