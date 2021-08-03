  
const path = require('path');
const chalk = require('chalk')
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const app = express();
require('dotenv').config()

/* DB */
const mongoose = require('mongoose');

//------------ Connect to DB ------------// 
mongoose.connect('mongodb+srv://city:securitypassword@cluster0.sxwfm.mongodb.net/rpg', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log(chalk.bold.green('DB Connected')))
    .catch(err => console.log(err))

//------------ Settings ------------//
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

//------------ Passport ------------//
require('./config/passport')(passport);

//------------ Middle Wares ------------//
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

//------------ Passport Middlewares ------------//
app.use(passport.initialize());
app.use(passport.session());

//------------ Connecting flash ------------//
app.use(flash());

//------------ Global Variables ------------//
app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
  });

//------------ Routes ------------//
app.use(require('./routes/home'))
app.use('/auth', require('./routes/auth'));
app.use(require('./routes/web'))



//------------ Start the server ------------//
app.listen(app.get('port'), () => {
  console.log(chalk.bold.green(`Server on port ${app.get('port')}`))
})