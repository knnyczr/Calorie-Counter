const express = require("express");
const router = express.Router();

const Foods = require("../models/foods");
// let functotalCals = require("./totalcals")
//-------------------------------------------------------------------
//Other Info

//Curretn Date:
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

// function totalCal(foods) {
//   console.log("function running----", foods)
//   calSum = 0;

//   for (let index = 0; index < foods.length - 1; index++) {
//     console.log(`${foods[index].name}: `, foods[index].calories);
//     calSum += Number(foods[index].calories);
//     console.log("total cal is: ", calSum);
//   }
//   return calSum; 
// };
//-------------------------------------------------------------------
router.delete('/:id', (req, res) => {
    Foods.findOneAndRemove({ _id: req.params.id })
      .then(() => {
        res.redirect('/')
      })
});

router.post('/', (req, res) => {
    Foods.create(req.body)
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

router.get('/', (req, res) => {
    Foods.find({}).then(foods =>  {
      console.log("RUNNING COUNT")
      calSum = 0;
      foods.forEach(food => {
          console.log(`${food.name}: `, food.calories);
          calSum += Number(food.calories);
          console.log("total cal is: ", calSum);
    });
      protSum = 0;
      foods.forEach(food => {
          console.log(`${food.name}: `, food.protein);
          protSum += Number(food.protein);
          console.log("total protein is: ", protSum)
      });
      carbSum = 0;
      foods.forEach(food => {
          console.log(`${food.name}: `, food.carb);
          carbSum += Number(food.carb);
          console.log("total protein is: ", carbSum)
      });
      fatSum = 0;
      foods.forEach(food => {
          console.log(`${food.name}: `, food.fat);
          fatSum += Number(food.fat);
          console.log("total protein is: ", fatSum)
      }); 
      res.render('index', { today, foods, calSum, protSum, carbSum, fatSum})
    }) 
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


module.exports = router;