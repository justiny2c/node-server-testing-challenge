const router = require("express").Router();

const Hobbits = require("./hobbits-model.js");


router.get("/hobbits", (req, res) => {
    Hobbits
        .find()
        .then(hobbits => {
            res.status(200).json(hobbits)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.post("/hobbits", (req, res) => {
    const newHobbit = req.body

    Hobbits
        .insert(newHobbit)
        .then(hobbit => {
            res.status(201).json(hobbit)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.delete("/hobbits/:id", (req, res) => {
    const id = req.params.id

    Hobbits
        .remove(id)
        .then(count => {
            res.status(200).json(count)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})


module.exports = router