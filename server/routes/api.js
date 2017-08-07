var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/recordsdb', ['records','genres']);

router.get('/', (req, res) => {
  res.json({message: 'api works'});
});

// Get all records
router.get('/records', function(req, res, next) {
  db.records.find().sort({catnum: 1}, function(err, records){
    if(err){
      console.log(err);
      res.send(err);
    }
    res.json(records);
  });
});

// Get a record by id
router.get('/records/:catnum', function(req, res, next) {
  db.records.findOne({catnum: req.params.catnum}, function(err, record){
    if(err){
      console.log(err);
      res.send(err);
    }
    res.json(record);
  });
});

// Create a new record
router.post('/records', function(req, res, next){
  var record = req.body;
  db.records.save(record, function(err, record){
    if(err){
      console.log(err);
      res.send(err);
    }
    res.json(record);
  });
});

// Delete a record
router.delete('/records/:catnum', function(req, res, next) {
  db.records.remove({catnum: req.params.catnum}, function(err, record){
    if(err){
      console.log(err);
      res.send(err);
    }
    res.json(record);
  });
});

// Update a record
router.put('/records/:catnum', function(req, res, next) {
  var record = req.body;
  // Remove the MongoDb _id from the document, causes problems due to mismatch.
  // String vs object
  delete record._id;
  db.records.update({catnum: req.params.catnum}, record, {},function(err, record){
    if(err){
      console.log(err);
      res.send(err);
    }
    res.json(record);
  });
});

// Get genres
router.get('/genres', function(req, res, next) {
  db.genres.find().sort({genre: 1}, function(err, genre) {
    if(err){
      console.log(err);
      res.send(err);
    }
    res.json(genre);
  });
});

module.exports = router;
