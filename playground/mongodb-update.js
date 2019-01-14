const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);


MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, client) => {
  if(err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connectd to mongodb server');
  const db = client.db('ToDoApp');

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5c3700a3c8eba430f4956320')
  }, {
    $set: {
      completed: false
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
    
  });

  client.close();
});
