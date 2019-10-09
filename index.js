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

app.set("port", process.env.PORT || 8000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});