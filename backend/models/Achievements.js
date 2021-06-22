const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// mongoose schema for achievement
const Achievement = new Schema({
    name: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    achievementList: [
        {
            position: {
                type: String,
                required: true
            },
            description: {
                type: String,
                reqiured: true
            }
        }
    ],
    image: {
        type: String,
        default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHtjjpfgZ6bWG7EI2A2F6DKGcpXKZ5Z3FrVA&usqp=CAU'
    }
});

module.exports = achievement = mongoose.model('Achievement', Achievement);