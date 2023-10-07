const mongoose = require('mongoose');

mongoose
	.connect('mongodb://localhost:27017/unlimitedfoodfinder')
	.then(() => {
		console.log('Connection Successfull');
	})
	.catch((e) => {
		console.log(e);
	});
