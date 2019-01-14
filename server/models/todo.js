var mongoose = require('mongoose');

var ToDo = mongoose.model('ToDo', {
    text: {
        type: String,
        required: true,
        minLength: 1,
        trim:true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});




// var newToDo = new ToDo({
//     text: '   Test defaults ',
//     completedAt: 123
// });

// newToDo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
    
// }, (err) => {
//     console.log('Unable to save', err);
    
// });



module.exports = {ToDo};