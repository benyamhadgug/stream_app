const express = require('express'),
    router = express.Router(),
    User = require('../database/Schema').User,
    shortid = require('shortid');

router.get('/stream_key',
    // require('connect-ensure-login').ensureLoggedIn(),
    (req, res) => {
        console.log(`Stream Key Post::`,req.query.user);
        User.findOne({email: req.query.user}, (err, user) => {
            if (!err) {
                res.json({
                    stream_key: user.stream_key
                })
            }
        });
    });

router.post('/stream_key',

    // require('connect-ensure-login').ensureLoggedIn(),
    (req, res) => {
        console.log(`Stream Key Post::`,req.body.user);

        User.findOneAndUpdate({
            email: req.body.user
        }, {
            stream_key: shortid.generate()
        }, {
            upsert: true,
            new: true,
        }, (err, user) => {
            if (!err) {
                res.json({
                    stream_key: user.stream_key
                })
            }
        });
    });


module.exports = router;

