const mongoose = require('mongoose');

let mongoURI = "";
if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
  } else {
    mongoURI = "mongodb://localhost/foods";
};

mongoose.connect(mongoURI, {useNewUrlParser: true}, () => {
    console.log("CONNECTED");
    })
    .catch(error => console.log("Connection failed!", error)
);

mongoose.Promise = Promise;
module.exports = mongoose;