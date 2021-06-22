const express = require('express');
const router = express.Router();
const Sponsors = require('./../models/Sponsors');

const nconf = require('nconf');

// loads the config file
nconf.argv().env().file({ file: 'services/config.json' });

// route to add new sponsors to the database
router.post('/', (req, res) => {
    if(req.headers.api_auth === nconf.get('apiAuth')) {
        let sponsor = new Sponsors({
            name: req.body.name,
            image: req.body.image           
        });
        sponsor.save().then(() => {
            res.status(200).send({ success: true, message: 'Sponsor created' });
        })
        .catch((err) => {
            console.log(err);
            res.status(401).send({ success: false });
        });
    } else {
        res.status(402).send({ success: false, message: 'Access denied.' });
    }
});

// route to fetch all the sponsors from the database
router.get('/', async (req, res) => {
    try {
        let sponsors = await Sponsors.find({});
        if(!sponsors)   return res.status(401).send({ success: false });    
        res.status(200).send(sponsors);
    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false });
    }
});

module.exports = router;