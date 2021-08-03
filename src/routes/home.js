const express = require('express');
const router = express.Router();

/* Router GET */
router.get('/', async (req, res) => {
    res.render('index', {title: 'City For Play ~ Inicio'});
})

router.get('/phone', async (req, res) => {
    res.render('phone', {title: 'City For Play ~ Phone Block'});
})
module.exports = router;