const mongoose = require('mongoose');

let mongoURI = "";
if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
  } else {
    mongoURI = "mongodb://localhost/foods";
};

mongoose.connect('mongodb://localhost/foods', {useNewUrlParser: true}, () => {
    console.log("CONNECTED");
});

mongoose.Promise = Promise;
module.exports = mongoose;