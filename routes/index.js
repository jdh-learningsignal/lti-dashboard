const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    return res.send({status: 'Up'});
});

module.exports = router;