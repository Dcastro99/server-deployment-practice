// const express = require('express');
// const Collection = require('./collection.js');
// const { musician } = require('./models/musician');
// const { golfer } = require('./models/golfer');

// const router = express.Router();
// const Musician = new Collection(musician); // connects to a SQL database and performs CRUD for musician.
// const Golfer = new Collection(golfer); // connects to a SQL database and performs CRUD for musician.

// ///////MUSICIAN//////
// router.get('/musician', async (req, res, next) => {
//   let newMusician = await Musician.read(); // returns musician records.
//   res.send(newMusician);
// });

// router.get('/musician/:id', async (req, res, next) => {
//   let newMusician = await Musician.read(); // returns a musician.
//   res.send(newMusician);
// });

// router.post('/musician', async (req, res, next) => {
//   let newMusician = await Musician.create({ musicianType: 'singer' }); // creates and returns a new musician record.
//   res.send(newMusician);
// });

// router.delete('/musician/:id', async (req, res, next) => {
//   let newMusician = await Musician.delete(); // deletes and returns a new musician record.
//   res.send(newMusician);
// });

// router.put('/musician/:id', async (req, res, next) => {
//   let newMusician = await Musician.put({ musicianType: 'new info' }); // updates and returns a new musician record.
//   res.send(newMusician);
// });

// //////GOLFER//////
// router.get('/golfer', async (req, res, next) => {
//   let newGolfer = await Golfer.read(); // returns golfer records.
//   res.send(newGolfer);
// });

// router.get('/golfer/:id', async (req, res, next) => {
//   let newGolfer = await Golfer.read(); // returns a golfer.
//   res.send(newGolfer);
// });

// router.post('/golfer', async (req, res, next) => {
//   let newGolfer = await Golfer.create({ golferName: 'singer' }); // creates and returns a new golfer record.
//   res.send(newGolfer);
// });

// router.delete('/golfer/:id', async (req, res, next) => {
//   let newGolfer = await Golfer.delete(); // deletes and returns a new golfer record.
//   res.send(newGolfer);
// });

// router.put('/golfer/:id', async (req, res, next) => {
//   let newGolfer = await Golfer.put({ golferName: 'new info' }); // updates and returns a new golfer record.
//   res.send(newGolfer);
// });

// module.exports = router;
