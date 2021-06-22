const express = require('express');
const router = express.Router();
const Team = require('./../models/TeamMember');

const nconf = require('nconf');

// loads the config file
nconf.argv().env().file({ file: 'services/config.json' });

// route to add new team members to the database
router.post('/', (req, res) => {
    if(req.headers.api_auth === nconf.get('apiAuth')) {
        const team = new Team({
            name: req.body.name,
            position: req.body.position,
            subsystem: req.body.subsystem,
            isHeadOfSubsystem: req.body.isHeadOfSubsystem,
            teamType: req.body.teamType,
            image: req.body.image,
            socialLinks: {}
        });
        if(req.body.instagram)  team.socialLinks.instagram = req.body.instagram;
        if(req.body.linkedin)  team.socialLinks.linkedin = req.body.linkedin;
        team.save().then(() => {
            res.status(200).send({ success: true, message: 'Team member created' });
        })
        .catch((err) => {
            console.log(err)
            res.status(401).send({ success: false });
        });
    } else {
        res.status(402).send({ success: false, message: 'Access denied.' });
    }
});

// route to fetch team members according to subsytem from the database
router.get('/:teamType/:subsystem', async (req, res) => {
    try {
        let teamType = req.params.teamType;
        let subSystem = req.params.subsystem;
        let isSubHeads = req.query.isSubHead;
        let members = await Team.find({
            teamType: teamType,
            subsystem: subSystem,
            isHeadOfSubsystem: isSubHeads
        });
        res.status(200).send(members);
    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false });
    }
});

module.exports = router;