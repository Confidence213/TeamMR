const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// mongoose schema for sponsors
const Sponsors = new Schema({
   name: {
       type: String,
       required: true
   }, 
   image: {
       type: String,
       default: 'https://www.clipartkey.com/mpngs/m/164-1648425_sponsors-partnership-icon-png.png'
   } 
});

module.exports = sponsors = mongoose.model('Sponsors', Sponsors);