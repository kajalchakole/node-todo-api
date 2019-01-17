const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {ToDo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// ToDo.remove({}).then((result) => {
//     console.log(result);
    
// });

ToDo.findByIdAndRemove('5c4047c659e96d6bfc7728cf').then((result) => {
    console.log(result);
    
});