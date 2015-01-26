(function() {
	'use strict';

	// File Requirements
	var curl = require('curlrequest');

	// Options Hash
	var options = {
		url: 'www.google.com',
		include: true
	};
	var stdout, data, head, headers;
	var headObj = {};

	curl.request(options, function(err, output) {
		if (err) throw err;

		stdout = output.split('<');
		data = stdout.pop();
		head = stdout[0];
		console.log('HEAD: ' + head);
		headers = head.split('\n');

		headers.forEach(function(line) {
			var splitline;
			if (line.indexOf(':') === -1) {
				splitline = line.split(' ');
				headObj[splitline[0]] = splitline[1] + ' ' + splitline[2];
			} else {
				splitline = line.split(':');
				if (!headObj[splitline[0]]) {
					headObj[splitline[0].trim()] = splitline[1].trim();
				} else {
					splitline[0] = splitline[0].trim();
					splitline[0] += '+';
					headObj[splitline[0].trim()] = splitline[1].trim();
				}
			}
		});

		console.log(headObj['Set-Cookie']);
	});

})();