const express = require('express');
const router = express.Router();
const Achievement = require('./../models/Achievements');

const nconf = require('nconf');

// loads the config file
nconf.argv().env().file({ file: 'services/config.json' });

// route to add new achievements to the database
router.post('/', (req, res) => {
    try {
        if(req.headers.api_auth === nconf.get('apiAuth')) {
            const achievement = Achievement({
                name: req.body.name,
                year: req.body.year,
                achievementList: req.body.achievementList,
                image: req.body.image
            });
            achievement.save().then((ach) => {
                res.status(200).send({ success: true, message: 'Achievement added' });
            }).catch((err) => {
                throw new Error('Unable to add achievement to database');
            });
        } else {
            res.status(402).send({ success: false, message: 'Access denied.' });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send({ success: false });
    }
});

// route to fetch all achievements from the database
router.get('/', async (req, res) => {
    try {
        const achievements = await Achievement.find({});
        if(!achievements){
            res.status(401).send({ success: false, message: 'Could not find achievements' })
        } else {
            res.status(200).send(achievements);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false });
    }
});

module.exports = router;