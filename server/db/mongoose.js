var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://mongoHeroku:Pass123@cluster0-nlrg2.mongodb.net/test?retryWrites=true');

module.exports = {mongoose};