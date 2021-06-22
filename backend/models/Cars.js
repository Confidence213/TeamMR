const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// mongoose schema for cars
const Cars = new Schema({
    version: {
        type: Number,
        required: true,
        default: 0
    },
    electric: {
        type: Boolean,
        default: false,
        required: true
    },
    images: {
        type: Array
    },
    weight: Number,
    chassis: String,
    dampers: String,
    brakes: String,
    transmission: String,
    suspension: {
        front: String,
        rear: String
    },
    wheels: {
        front: String,
        rear: String
    },
    driver: {
        name: String,
        studies: String,
        image: {
            type: String,
            default: 'https://www.businessnetworks.com/sites/default/files/default_images/default-avatar.png'
        }
    }
});

module.exports = cars = mongoose.model('Cars', Cars);