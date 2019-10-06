const express = require("express");
const router = express.Router();

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
    Foods.find({}).then(foods => res.render('index', { foods }))
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

module.exports = router;