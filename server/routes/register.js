const express = require('express'),
    router = express.Router(),
    passport = require('passport');
User = require('../database/Schema').User; 

router.post('/', (req, res) => {
    User.findOne({$or: [{email: req.body.email}, {username: req.body.username}]},  (err, user) => {
        if (err)
            return res.json({"success": 0, "message": "failed"}); 
        if (user) {
            if (user.email === request.body.email) {
                return res.json({"success": 0, "message": "Email is already taken"});
            }
            if (user.username === req.body.username) {
                return res.json({"success": 0, "message": "Username is already taken"});
            }
            return res.json({"success": 0, "message": "User already Exists. "});
        } else {
            let user = new User();
            user.email = req.body.email;
            user.password = user.generateHash(req.body.password);
            user.username = req.body.username;
            user.usergroup= req.body.usergroup;
            user.name= req.body.name;
            user.stream_key = shortid.generate();
            user.save( (err) => {
                if (err)
                    return res.json({"success": 0, "message": "Error Happpened Creating the User."});
                return res.json({"success": 1, "message": user});
                // Return a JWT TOKEN here.
            });
        }
    });
});

module.exports = router;

