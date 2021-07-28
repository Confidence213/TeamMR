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
            teamYear: req.body.teamYear,
            isAlumni: req.body.isAlumni,
            subsystem: req.body.subsystem ? req.body.subsystem : "",
            isHeadOfSubsystem: req.body.isHeadOfSubsystem,
            teamType: req.body.teamType,
            image: req.body.image,
            socialLinks: {}
        });
        if(req.body.isTeamLead)  team.isTeamLead = req.body.isTeamLead;
        if(req.body.isTeamManager)  team.isTeamManager = req.body.isTeamManager;
        if(req.body.isTechHead)  team.isTechHead = req.body.isTechHead;
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
router.get('/:teamType/:teamYear', async (req, res) => {
    try {
        let teamType = req.params.teamType;
        let subsystem = req.query.subsystem;
        let isSubHeads = req.query.isSubHead;
        let teamYear = req.params.teamYear;
        let isAlumni = req.query.isAlumni;
        let isTopThree = req.query.isTopThree;

        if(!teamType) return res.status(401).send({ success: false, message: 'Team type not specified' });
        if(!isTopThree && !subSystem) return res.status(401).send({ success: false, message: 'Query for subsystem not specified' });
        if(!isSubHeads) return res.status(401).send({ success: false, message: 'Query for subsystem head not specified' });
        if(!isAlumni) return res.status(401).send({ success: false, message: 'Query for alumni not specified' });
        if(!teamYear) return res.status(401).send({ success: false, message: 'Query for team year not specified' });

        let query = {}
        
        if(teamType) query.teamType = teamType;
        if(teamYear) query.teamYear = teamYear;
        if(isTopThree) query.isTopThree = isTopThree;
        if(isSubHeads) query.isHeadOfSubsystem = isSubHeads;
        if(isAlumni) query.isAlumni = isAlumni;
        if(subsystem) query.subsystem = subsystem;

        let members = await Team.find(query);
        res.status(200).send(members);
    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false });
    }
});

module.exports = router;