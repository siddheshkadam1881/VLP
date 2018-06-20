'use strict';
 // Include our "db"
 var db = require('../../config/db')();

 module.exports = { register };





 	function register(req, res) {
    console.log("yellow")
 		res.json({success: db.register(req.body), description: "user is  added to the list!"});
 	}
