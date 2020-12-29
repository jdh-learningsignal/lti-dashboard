const { Router } = require('express');
const express = require('express');
const Course = require('../models/course');
const Enrollment = require('../models/enrollment');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const router = express.Router();

router.get('/users/:id/courses', async(req, res, next) => {
    try {
        const enrollments = await Enrollment.findAll({
            where: { 
                user_id: req.params.id,
                workflow_state: 'active'
            }
        });

        const course_ids = enrollments.map(item => item.dataValues.course_id);

        const courses = await Course.findAll({
            where: {
                id: {
                    [Op.or]: course_ids
                }
            }
        });
        
        res.json(courses);
    } catch (err) {
        console.error(err);
        next(err);
    }
});

module.exports = router;