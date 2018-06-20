'use strict;'
//Include crypto to generate the movie id
var crypto = require('crypto');

module.exports = function() {
	return {
		userList : [],
		/*
		 * Save the movie inside the "db".
		 */
		register(user) {
			movie.id = crypto.randomBytes(20).toString('hex'); // fast enough for our purpose
			this.userList.push(user);
			return 1;
		}
  }
};
