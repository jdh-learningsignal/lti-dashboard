const { Router } = require('express');
const express = require('express');
const Enrollment = require('../models/enrollment');

const router = express.Router();

router.get('/:id/courses', async(req, res, next) => {
    try {
        const enrollments = await Enrollment.findAll({
            where: { 
                user_id: req.params.id,
                workflow_state: 'active'
            }
        });

        res.json(enrollments);
    } catch (err) {
        console.error(err);
        next(err);
    }
});

module.exports = router;