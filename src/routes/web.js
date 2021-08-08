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
    let id_game = req.params.id;
    let game = await Game.findById(id_game);
    if (game.userscalification.includes(req.user.id)) {
        req.flash(
            'error_msg',
            'Ya lo has calificado anteriormente.'
        );
        res.redirect(`/games/${id_game}`)
    } else {
        await Game.findByIdAndUpdate(id_game, {
            $push: {
                userscalification: req.user.id
            },
        })
        game.stats.stars = parseInt(game.stats.stars) + parseInt(req.params.num);
        game.save()
        req.flash(
            'success_msg',
            'Has calificado con exito.'
        );
        res.redirect(`/games/${id_game}`)
    }


})
module.exports = router;