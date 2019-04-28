var express = require('express');
var router = express.Router();

var data = require('../data');

router.post('/api/login', function (req, res, next) {
	setTimeout(function() {
        if (data[req.body.username] && req.body.password === data[req.body.username]) {
        	res.status(200);
            res.send({
            	success: true,
            	errorMessage: null
            });    
        } else {
        	res.status(401);
            res.send({
            	success: false,
            	errorMessage: 'Incorrect username/password'
            });
        }
    }, 2000);
});

router.delete('/api/logout', function (req, res) {
    setTimeout(function() {
    	res.status(200);
        res.send({
        	success: true,
        	errorMessage: null
        }); 
    }, 2000);
});

module.exports = router;