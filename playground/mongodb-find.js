const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server');
  
  var db = client.db('TodoApp');
  
  // db.collection('Todos').find({_id: ObjectId('5b46c396d77de840d8b16701')}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2))
  // }, (err) => {
  //   console.log('Unable to fetch Todos', err)
  // });
  
  
  db.collection('Todos').find().count().then((count) => {
    console.log('Todos');
    console.log(`Todos Count: ${count}`)
  }, (err) => {
    console.log('Unable to fetch Todos', err)
  });
  
  
  //client.close();
});