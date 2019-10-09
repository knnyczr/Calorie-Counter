const mongoose = require('mongoose');

//b9iabzLdufPYpCl2
//"mongodb+srv://dbFoods:b9iabzLdufPYpCl2@cluster0-zzj0k.mongodb.net/test?retryWrites=true&w=majority"
let mongoURI = "";
if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
  } else {
    mongoURI = "mongodb://localhost/foods";
};

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(instance =>
    console.log(`Connected to db: ${instance}`)
  )
  .catch(error => console.log("Connection failed!", error));

mongoose.Promise = Promise;
module.exports = mongoose;