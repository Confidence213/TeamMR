const mongoose = require('mongoose');
const nconf = require('nconf');

// loads the config file
nconf.argv().env().file({ file: 'services/config.json' });

// method that connects to the MongoDB database
const connectDB = async () => {
    try {
        await mongoose.connect(nconf.get('mongoDBURI'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log("MongoDB is connected");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;