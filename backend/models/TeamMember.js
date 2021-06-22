const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// mongoose schema for team member
const Team = new Schema({
    name: {
        type: String,
        required: true
    },
    position: {
        type: String, 
        required: true
    },
    subsystem: {
        type: String,
        required: true
    },
    isHeadOfSubsystem: {
        type: Boolean,
        required: true
    },
    teamType: {
        type: String, 
        required: true
    },
    image: {
        type: String,
        default: 'https://www.businessnetworks.com/sites/default/files/default_images/default-avatar.png' 
    },
    socialLinks: {
        instagram: String,
        linkedin: String
    }
});

module.exports = team = mongoose.model('Team', Team);