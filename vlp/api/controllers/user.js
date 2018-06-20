'use strict';
 // Include our "db"
 var db = require('../../config/db')();

 module.exports = { register };




 	//POST /movie operationId
 	function register(req, res, next) {
 		res.json({success: db.save(req.body), description: "user is  added to the list!"});
 	}
