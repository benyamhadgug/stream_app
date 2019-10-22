const express = require('express'),
    router = express.Router(),
    passport = require('passport');
User = require('../database/Schema').User; 
shortid = require('shortid');

router.post('/', (req, res) => {
    //let name= {"name": req.body.name, "username": req.body.username, "password": req.body.password, "email": req.body.email, "usergroup": req.body.usergroup};
    //return res.json({"success": 0, "message": "username = " + name.name + " - " + name.email + " - " + name.password + " - " + name.usergroup + " - " + name.username}); 
    User.findOne({$or: [{email: req.body.email}, {username: req.body.username}]},  (err, user) => {
        if (err)
            return res.json({"success": 0, "message": "failed", "user": null, "access_token": null, "expires_in": 0}); 
        
        if (user) {
            if (user.email === req.body.email) {
                return res.json({"success": 0, "message": "Email is already taken", "user": null, "access_token": null, "expires_in": 0});
            }
            if (user.username === req.body.username) {
                return res.json({"success": 0, "message": "Username is already taken", "user": null, "access_token": null, "expires_in": 0});
            }
            return res.json({"success": 0, "message": "User already Exists. ", "user": null, "access_token": null, "expires_in": 0});
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

