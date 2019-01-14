const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);


MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, client) => {
  if(err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connectd to mongodb server');
  const db = client.db('ToDoApp');

  // db.collection('Todos').deleteMany({text: "eat lunch"}).then((result) => {
  //   console.log(result);    
  // });

  // db.collection('Todos').deleteOne({text: 'Walk a dog'}).then((result) => {
  //   console.log(result);    
  // });

  // db.collection('Todos').findOneAndDelete({completed :false}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Todos').deleteMany({name :'Andrew'});

  db.collection('Users').findOneAndDelete({ _id: new ObjectID("5c36ec364cd9560e087fd522")}).then((res) => {
    console.log(JSON.stringify(res, undefined, 2));
    
  });

  client.close();
});
