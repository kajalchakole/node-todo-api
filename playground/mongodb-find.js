const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, client) => {
  if(err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connectd to mongodb server');
  const db = client.db('ToDoApp');

  db.collection('Todos').find({
    _id: new ObjectID('5c36f82c2012f830f4dad514')
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));   
  }, (err) => {
    console.log('Unable to fetch data');    
  });

  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos have ${count} documents` );
    
  }, (err) => {
    console.log('Unable to fetch data');    
  });

  db.collection('Users').find({
    name: 'Andrew'
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));   
  }, (err) => {
    console.log('Unable to fetch data');    
  });

  client.close();
});
