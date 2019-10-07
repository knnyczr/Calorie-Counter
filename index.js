const express = require('express');
const hbs = require('hbs');
const parser = require('body-parser');
const methodOverride = require('method-override');

const app = express();

app.set("view engine", "hbs");
app.use(parser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static('./public'));

const foodController = require('./controllers/calories');
app.use("/", foodController);

app.listen(8000, () => console.log("Running on port 8000!"))