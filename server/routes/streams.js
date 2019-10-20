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
            let query2= [
                { username: "Nuw", email: 'tim@mail.com', password: "1234", stream_key: "1234" },
                { username: "Ben", email: 'ben@mail.com', password: "1234", stream_key: "1256" },
                { username: "Dan", email: 'dan@mail.com', password: "1234", stream_key: "1278" },
              ];

            for (let stream in streams) {
                if (!streams.hasOwnProperty(stream)) continue;
                query.$or.push({stream_key : stream});
            }

            User.insertMany(query2,(err,data) => {
                console.log(` fromDB`,data);

                if (err)
                    // return;
                    res.json({success:0, err});
                if (data) {
                    res.json(data);
                }    
            });

            console.log(`query::`,query);
            User.find({name:"tim"},(err, users) => {
                if (err)
                    // return;
                    res.json({success:0});

                if (users) {
                    res.json(users);
                }
            });
        }
    });

router.get('/', (req, res) => {
    console.log(`streams in routes`,req);

    res.json({success: 1});
});
module.exports = router;

