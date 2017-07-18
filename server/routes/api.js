var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/recordsdb', ['records']);

router.get('/', (req, res) => {
  res.json({message: 'api works'});
});

// Get all records
router.get('/records', function(req, res, next) {
  db.records.find().sort({id: 1}, function(err, records){
    if(err){
      res.send(err);
    }
    res.json(records);
  });
});

// Get a record
router.get('/records/:id', function(req, res, next) {
  db.records.findOne({id: req.params.id}, function(err, record){
    if(err){
      res.send(err);
    }
    res.json(record);
  });
});

// Create record
router.post('/records', function(req, res, next){
  var record = req.body;
  db.records.save(record, function(err, record){
    if(err){
      res.send(err);
    }
    res.json(record);
  });
});

// Delete a record
router.delete('/records/:id', function(req, res, next) {
  db.records.remove({id: req.params.id}, function(err, record){
    if(err){
      res.send(err);
    }
    res.json(record);
  });
});

// Update a record
router.put('/records/:id', function(req, res, next) {
  var record = req.body;
  db.records.update({id: req.params.id}, record, {},function(err, record){
    if(err){
      res.send(err);
    }
    res.json(record);
  });
});

module.exports = router;
