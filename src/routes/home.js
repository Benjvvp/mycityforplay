const express = require('express');
const router = express.Router();

/* Router GET */
router.get('/', async (req, res) => {
    res.render('index', {title: 'City For Play ~ Inicio'});
})

module.exports = router;