const express = require('express');
const router = express.Router();
const Game = require('../models/game')

//------------ Router Get ------------//
router.get('/', async (req, res) => {
    res.render('index', {
        title: 'City For Play ~ Inicio'
    });
})

router.get('/phone', async (req, res) => {
    res.render('phone', {
        title: 'City For Play ~ Phone Block'
    });
})

router.get('/games', async (req, res) => {
    const view = req.query.view;
    if (req.query.category === 'action') {
        const games = await Game.find({'category': 'action'})
        res.render('games', {
            games,
            title: 'City For Play ~ Juegos',
            view
        });
    } else if (req.query.category === 'adventure') {
        const games = await Game.find({'category': 'adventure'})
        res.render('games', {
            games,
            title: 'City For Play ~ Juegos',
            view
        });
    } else if (req.query.category === 'conduction') {
        const games = await Game.find({'category': 'conduction'})
        res.render('games', {
            games,
            title: 'City For Play ~ Juegos',
            view
        });
    } else if (req.query.category === 'platform') {
        const games = await Game.find({'category': 'platform'})
        res.render('games', {
            games,
            title: 'City For Play ~ Juegos',
            view
        });
    } else if (req.query.category === 'shooter') {
        const games = await Game.find({'category': 'shooter'})
        res.render('games', {
            games,
            title: 'City For Play ~ Juegos',
            view
        });
    } else if (req.query.category === 'simulation') {
        const games = await Game.find({'category': 'simulation'})
        res.render('games', {
            games,
            title: 'City For Play ~ Juegos',
            view
        });
    } else {
        const games = await Game.find()
        res.render('games', {
            games,
            title: 'City For Play ~ Juegos',
            view
        });
    }
})

router.get('/games/:id', async (req, res) => {
    let game = await Game.findById(req.params.id);
    game.stats.views++;
    game.save();
    res.render('game', {
        game,
        title: `City For Play ~ ${game.name}`
    });
});

//------------ Post ------------//
router.post('/addgame', async (req, res) => {
    const newGame = new Game({
        name: req.body.name,
        img: req.body.img,
        mygame: Boolean(req.body.mygame),
        gamebox: req.body.gamebox
    })
    await newGame.save();
    res.redirect('addgame')
});

module.exports = router;