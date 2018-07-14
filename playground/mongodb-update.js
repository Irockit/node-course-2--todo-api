const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server');
  
  var db = client.db('TodoApp');
  
  db.collection('Todos').findOneAndUpdate({
    _id: ObjectId("5b49501d1c6ff81738ccea4a")
  }, {
    $set: {
      completed: true
    }
  },{
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  
  //client.close();
});