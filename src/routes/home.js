const e = require('connect-flash');
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
    if(req.query.category === 'action'||'adventure'||'conduction'||'platform'||'shooter'||'simulation'){
        const games = await Game.find({'category': req.query.category});
        res.render('games', {
            games,
            title: `City For Play ~ Juegos`
        });
    } else {
        const games = await Game.find();
        res.render('games', {
            games,
            title: `City For Play ~ Juegos`
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
    function getselection (number){
        if(number == 1) return 'action';
        if(number == 2) return 'adventure';
        if(number == 3) return 'conduction';
        if(number == 4) return 'platform';
        if(number == 5) return 'shooter';
        if(number == 6) return 'simulation';
    }
    const newGame = new Game({
        name: req.body.name,
        img: req.body.img,
        mygame: Boolean(req.body.mygame),
        gamebox: req.body.gamebox,
        category: getselection(req.body.category),
    })
    await newGame.save();
    res.redirect('addgame')
});

module.exports = router;