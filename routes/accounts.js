const { Router } = require('express');
const express = require('express');
const Course = require('../models/course');

const router = express.Router();

router.get('/:id/courses', async(req, res, next) => {
    try {
        const courses = await Course.findAll({
            where: { 
                account_id: req.params.id
            }
        });

        res.json(courses);
    } catch (err) {
        console.error(err);
        next(err);
    }
});

module.exports = router;