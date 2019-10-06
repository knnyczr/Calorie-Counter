const mongoose = require("../db/connection");

const foodSchema = new mongoose.Schema({
    name: String,
    servings: Number,
    calories: Number,
    protein: Number,
    carb: Number,
    fat: Number,
});

const Food = mongoose.model("cal", foodSchema);
module.exports = Food;