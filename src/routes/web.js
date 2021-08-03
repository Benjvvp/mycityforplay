const express = require('express');
const router = express.Router();
const {
    ensureAuthenticated
} = require('../config/checkAuth')
const Game = require('../models/game')

/* AREA PRIVADA */
router.use((req, res, next) => {
    ensureAuthenticated(req, res, next);
});


router.get('/about', async (req, res) => {
    res.render('about', {title: 'City For Play ~ Acerca'});
})

router.get('/games', async (req, res) => {
    const games = await Game.find();
    console.log(games)
    res.render('games', {games, title: 'City For Play ~ Juegos'});
})

router.get('/games/:id', async (req, res) => {
    let game = await Game.findById(req.params.id);
    game.stats.views++;
    game.save();
    res.render('game', {game, title: `City For Play ~ ${game.name}`});
});

/* ADMIN */

router.get('/addgame', (req, res, next) => {
    if(req.user.admin){
        res.render('addgame', {title: 'City For Play ~ Agregar Juego'})
    }else{
        res.redirect('/')
    }
});

/* POST */
router.post('/addgame', async (req, res) => {
    const newGame = new Game({
        name: req.body.name,
        img: req.body.img,
        description: req.body.description
    })
    await newGame.save();
    res.redirect('addgame')
});

module.exports = router;