const mongoose = require('mongoose');
const URI = 'mongodb://localhost/testdb';
mongoose.connect(URI, { useNewUrlParser: true }, function(){
    console.log('Connected!!');
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));