const express = require('express'),
    router = express.Router(),
    User = require('../database/Schema').User;

router.get('/info',
    // require('connect-ensure-login').ensureLoggedIn(),
    (req, res) => {

        console.log(`streams in routes`,req.query.streams);

        if(req.query.streams){
            let streams = JSON.parse(req.query.streams);
            console.log(`Streams>>>>>::`,streams);

            let query = {$or: []};

            for (let stream in streams) {
                if (!streams.hasOwnProperty(stream)) continue;
                query.$or.push({stream_key : stream});
            }

            User.find({password:"1234"},(err, users) => {

                if (err){
                    res.json({success:0, err});

                }
                    // return;

                if (users) {
                    console.log(`data query::`,users);

                    res.json(users);
                }
            });
        }
    });

module.exports = router;

