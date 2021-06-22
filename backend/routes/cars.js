const express = require('express');
const router = express.Router();
const nconf = require('nconf');
const Cars = require('./../models/Cars');

// loads the config file
nconf.argv().env().file({ file: 'services/config.json' });

// route to add cars to the database
router.post('/', (req, res) => {
    if(req.headers.api_auth === nconf.get('apiAuth')) {
        let car = new Cars({
            version: req.body.version,
            electric: req.body.electric,
            images: req.body.images,
            driver: req.body.driver 
        });
        if(req.body.weight) car.weight = req.body.weight;
        if(req.body.chassis) car.chassis = req.body.chassis;
        if(req.body.dampers) car.dampers = req.body.dampers;
        if(req.body.brakes) car.brakes = req.body.brakes;
        if(req.body.transmission) car.transmission = req.body.transmission;
        if(req.body.suspensionFront) car.suspension.front = req.body.suspensionFront;
        if(req.body.suspensionBack) car.suspension.rear = req.body.suspensionBack;
        if(req.body.wheelsFront) car.wheels.front = req.body.wheelsFront;
        if(req.body.wheelsBack) car.wheels.rear = req.body.wheelsBack;
        car.save().then(() => {
            res.status(200).send({ success: true, message: 'Car added to database' });
        }).catch((err) => {
            res.status(401).send({ success: false });
        })
    } else {
        res.status(402).send({ success: false, message: 'Access denied.' });
    }
});

// route to fetch cars according to version number from the database
router.get('/:versionNum', async (req, res) => {
    try {
        let version = req.params.versionNum;
        let car = await Cars.find({
            version: version
        });
        if(!car) return res.status(401).send({ success: false });
        res.status(200).send(car);
    } catch (error) {
        console.log(error);
        res.status(500).send({ success:false });
    }
});


module.exports = router;