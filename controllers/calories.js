const express = require("express");
const router = express.Router();

const jsonData = require("../db/seeds.json")
const Foods = require("../models/foods");

router.delete('/:id', (req, res) => {
    Foods.findOneAndRemove({ _id: req.params.id })
      .then(() => {
        res.redirect('/')
      })
});

router.post('/', (req, res) => {
    Foods.create(req.body)
      .then(item => {
        jsonData.push(item);
      })
      .then(item => {
        res.redirect('/')
      })
});

router.put('/:id', (req, res) => {
    Foods.findOneAndUpdate({_id: req.params.id}, req.body, { new: true })
      .then(item => {
        res.redirect('/')
      })
});

router.get("/", (req, res) => {
    Foods.find({}).then(foods =>  {
      console.log("RUNNING COUNT", foods)
      totalCal = totalCal(foods);
      res.render('index', { foods, totalCal})
    })
    // .then(foods => {
    //   console.log("RUNNING COUNT")
    //   totalCal = totalCal(foods);
    // })
    .catch(err => console.error(err));
});

router.get('/edit/:id', (req, res) => {
    Foods.findOne({_id: req.params.id})
      .then(item => {
        res.render("edit", { item })
      })
});

router.get('/new', (req, res) => {
    res.render('new')
});

router.get("/:id", (req, res) => {
    Foods.findOne({ _id: req.params.id })
      .then(item => {
        res.render("show", item);
      })
      .catch(err => console.error(err));
});

//FUNCTIONS--------------------------------------
function totalCal(foods) {
  console.log("function ran----")
  calSum = 0;
  // const calHTML = document.querySelector(".totalCal");
  // console.log(calHTML);
  for (let index = 0; index < foods.length; index++) {
    console.log(`${foods[index].name}: `, foods[index].calories);
    calSum += Number(foods[index].calories);
    console.log("total cal is: ", calSum);
  }
  return calSum; 
};

module.exports = router;