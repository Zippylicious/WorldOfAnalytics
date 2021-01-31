var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('This will be the login page');
});

module.exports = router;

/*

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbAdmin:<password>@db1.3sdoz.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

*/