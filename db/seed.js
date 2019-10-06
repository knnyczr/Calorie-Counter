const Food = require('../models/foods');
const seeds = require("./seeds.json");

Food.deleteMany({})
  .then(() => {
    return Food.insertMany(seeds)
  })
  .then(() => {
      console.log("Data collected")
    process.exit();
});