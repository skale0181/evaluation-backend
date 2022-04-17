const express = require('express');
const router = express.Router();

const Class = require('../models/classes.model');


router.post('/', async (req, res) => {
    try {
        const classes = await Class.create(req.body);
        res.status(201).send(classes);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
})

router.get("/", async (req, res) => {
    try {
        const classes = await Class.find().populate("teacher_id").lean().exec();
        res.status(200).send(classes);
    }
    catch (err) {
        res.status(500).send(err.message);
        //console.log(err.message);
    }
})

router.get("/:id", async (req, res) => {
    try {
        const classes = await Class.findById(req.params.id).populate("teacher_id").lean().exec();
        res.status(200).send(classes);
    }
    catch (err) {
        //console.log(err.message);
        res.status(500).send(err.message);
    }
})

module.exports = router;