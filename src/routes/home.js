const e = require('connect-flash');
const express = require('express');
const router = express.Router();
const Game = require('../models/game')

//------------ Router Get ------------//

router.get('/', async (req, res) => {
    if(req.query.category == undefined){
        const games = await Game.find().sort({
            name: 1
        });
        res.render('games', {
            games,
            title: `My City For Play - Juegos`
        });
        return;
    }
    if (req.query.category == 'action' || 'adventure' || 'conduction' || 'platform' || 'shooter' || 'simulation' || 'strategic' || 'fight') {
        const games = await Game.find({
            'category': req.query.category
        });
        res.render('games', {
            games,
            title: `My City For Play - Juegos`
        });
    }
})

router.get('/index', async (req, res) => {
    res.render('index', {
        title: 'My City For Play'
    });
})

router.get('/games/:id', async (req, res) => {
    let game = await Game.findById(req.params.id);
    game.stats.views++;
    game.save();
    res.render('game', {
        game,
        title: `My City For Play - ${game.name}`
    });
});

//------------ Post ------------//
router.post('/addgame', async (req, res) => {
    function getselection(number) {
        if (number == 1) return 'action';
        if (number == 2) return 'adventure';
        if (number == 3) return 'conduction';
        if (number == 4) return 'platform';
        if (number == 5) return 'shooter';
        if (number == 6) return 'simulation';
        if (number == 7) return 'strategic';
        if (number == 8) return 'fight';
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