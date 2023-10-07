const express = require('express');
const app = express();
require('../db/connection');
const Hotel = require('../models/hotels');
const Contact = require('../models/contact');
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/AddHotels', (req, res) => {
	const hotel = new Hotel(req.body);
	hotel
		.save()
		.then(() => {
			res.send('Added Successfully');
		})
		.catch((e) => {
			res.send(e);
		});
});

app.get('/GetAllOffers', (req, res) => {
	Hotel.find()
		.then((h) => {
			res.send(h);
		})
		.catch((e) => {
			console.log(e);
		});
});

app.post('/AddContact', (req, res) => {
	const contact = new Contact(req.body);
	contact
		.save()
		.then(() => {
			res.send('Added Successfully');
		})
		.catch((e) => {
			res.send(e);
		});
});

app.get('/GetContactDetails', (req, res) => {
	contact
		.find()
		.then((h) => {
			res.send(h);
		})
		.catch((e) => {
			console.log(e);
		});
});

app.listen(port, () => {
	console.log('${port}');
});
