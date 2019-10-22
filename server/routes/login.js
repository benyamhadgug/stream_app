const express = require('express'),
    router = express.Router();
User = require('../database/Schema').User; 
const  bodyParser  =  require('body-parser');
const cors = require('cors');
const  jwt  =  require('jsonwebtoken');
const  bcrypt  =  require('bcryptjs');


router.post('/',  (req, res) => {
    //console.log("passed username : " + req.body.username);
    //return res.json({"success": 0, "message": "username = " + req.body.username}); 
    User.findOne({'username': req.body.username}, (err, user) => {
        //return res.json({"success": 0, "message": "username = " + req.query.username}); 
        //console.log("passed username : " + req.body.username);
        if (err)
            return res.json({"success": 0, "message": "failed", "user": null, "access_token": null, "expires_in": 0}); 
        //return  res.json({"success": 0, "message": user});
        if(! user )
            return res.json({"success": 0, "message": "No such user name exists.", "user": null, "access_token": null, "expires_in": 0});
        
        if (!user.validPassword(req.body.password))
            return res.json({"success": 0, "message": "Password is Invalid.", "user": null, "access_token": null, "expires_in": 0});
        // Return a JWT here -----------------
        const SECRET_KEY = "secretkey23456";
        const  expiresIn  =  24  *  60  *  60;
        const  accessToken  =  jwt.sign({ name: user.name, username: user.username, usergroup: user.usergroup, email: user.email},SECRET_KEY, {expiresIn:  expiresIn });
        //const  accessToken  =  jwt.sign({ name: user.name, username: user.username, usergroup: user.usergroup, email: user.email},
                
        res.json({ "success": 1, "message": "Success!", "user":  user, "access_token":  accessToken, "expires_in":  expiresIn});

        //return res.json({success: 1, "message": "Success!"});
    });
});

module.exports = router;

