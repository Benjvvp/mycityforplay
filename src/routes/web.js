const express = require('express');
const router = express.Router();
const {
    ensureAuthenticated
} = require('../config/checkAuth')
const Game = require('../models/game')

//------------ Authenticated ZONE ------------//
router.use((req, res, next) => {
    ensureAuthenticated(req, res, next);
});

//------------ ADMIN ------------//
router.get('/addgame', (req, res, next) => {
    if (req.user.admin) {
        res.render('addgame', {
            title: 'City For Play ~ Agregar Juego'
        })
    } else {
        res.redirect('/')
    }
});

//------------ Calification Game ------------//
router.get('/games/:id/calification/:num', async (req, res) => {
    let game = await Game.findById(req.params.id);
    if (game.userscalification.includes(req.user.id)) {
        req.flash(
            'error_msg',
            'Ya lo has calificado anteriormente.'
        );
        res.redirect(`/games/${req.params.id}`)
    } else {
        await Game.findOneAndUpdate(req.params.id, {
            $push: {
                userscalification: req.user.id
            }
        })
        game.stats.stars = game.stats.stars + req.params.num;
        game.save()
        req.flash(
            'success_msg',
            'Has calificado con exito.'
        );
        res.redirect(`/games/${req.params.id}`)
    }


})
module.exports = router;