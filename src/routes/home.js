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

router.get('/about', async (req, res) => {
    res.render('about', {
        title: 'City For Play ~ Acerca'
    });
})

router.get('/games', async (req, res) => {
    const games = await Game.find();
    res.render('games', {
        games,
        title: 'City For Play ~ Juegos'
    });
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
        description: req.body.description
    })
    await newGame.save();
    res.redirect('addgame')
});


//------------ Games Filters ------------//

router.get('/games/filter/name', async (req, res) => {
    const games = await Game.find().sort( { name: 1 } );
    res.render('games', {
        games,
        title: 'City For Play ~ Juegos'
    });
})

router.get('/games/filter/calification', async (req, res) => {
    const games = await Game.find().sort( { "stats.stars": -1 }  );

    res.render('games', {
        games,
        title: 'City For Play ~ Juegos'
    });
})

router.get('/games/filter/views', async (req, res) => {
    const games = await Game.find().sort( { "stats.views": -1 } );
    res.render('games', {
        games,
        title: 'City For Play ~ Juegos'
    });
})

router.get('/games/filter/comments', async (req, res) => {
    const games = await Game.find().sort( { "stats.comments": -1 }  );
    res.render('games', {
        games,
        title: 'City For Play ~ Juegos'
    });
})

module.exports = router;