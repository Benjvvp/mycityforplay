const express = require('express');
const router = express.Router();
const {
    ensureAuthenticated
} = require('../config/checkAuth')


//------------ Authenticated ZONE ------------//
router.use((req, res, next) => {
    ensureAuthenticated(req, res, next);
});

//------------ ADMIN ------------//

router.get('/addgame', (req, res, next) => {
    if(req.user.admin){
        res.render('addgame', {title: 'City For Play ~ Agregar Juego'})
    }else{
        res.redirect('/')
    }
});

module.exports = router;