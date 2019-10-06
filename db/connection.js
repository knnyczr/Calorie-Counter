const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/foods', {useNewUrlParser: true}, () => {
    console.log("CONNECTED");
});

mongoose.Promise = Promise;
module.exports = mongoose;