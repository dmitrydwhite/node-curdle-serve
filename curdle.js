(function() {
	'use strict';

	// File Requirements
	var curl = require('curlrequest');

	// Data Hash
	var postData = {
		// Enter data to post here
	};

	// Options Hash
	var options = {
		url: 'http://rubusmap.herokuapp.com/api/patches',
		method: 'POST',
		include: true,
		data: postData || false
	};

	curl.request(options, function(err, output) {
		if (err) throw err;

		console.log(output);
	});

})();