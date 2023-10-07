const mongoose = require('mongoose');
const validator = require('validator');

const hotelsSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	image: {
		type: Buffer,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	offers: {
		type: String,
		required: true,
	},
	location: {
		type: {
			type: String,
			required: true,
		},
		coordinates: [],
	},
});

const Hotel = new mongoose.model('Hotel', hotelsSchema);

module.exports = Hotel;
