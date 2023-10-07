const mongoose = require('mongoose');
const validator = require('validator');

const contactSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	comment: {
		type: String,
		required: true,
	},
});

const Contact = new mongoose.model('Contact', contactSchema);

module.exports = Contact;
