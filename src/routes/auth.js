const express = require('express');
const router = express.Router();

//------------ Importing Controllers ------------//
const authController = require('../controllers/authConntroller')

//------------ Login Route ------------//
router.get('/login', (req, res) => res.render('login', {title: 'City For Play ~ Entrar'}));

//------------ Forgot Password Route ------------//
router.get('/forgot', (req, res) => res.render('forgot', {title: 'City For Play ~ Recuperar Contraseña'}));

//------------ Reset Password Route ------------//
router.get('/reset/:id', (req, res) => {
    // console.log(id)
    res.render('reset', { id: req.params.id, title: 'City For Play ~ Reiniciar Contraseña'})
});

//------------ Register Route ------------//
router.get('/register', (req, res) => res.render('register', {title: 'City For Play ~ Registrarse'}));

//------------ Register POST Handle ------------//  
router.post('/register', authController.registerHandle);

//------------ Email ACTIVATE Handle ------------//
router.get('/activate/:token', authController.activateHandle);

//------------ Forgot Password Handle ------------//
router.post('/forgot', authController.forgotPassword);

//------------ Reset Password Handle ------------//
router.post('/reset/:id', authController.resetPassword);

//------------ Reset Password Handle ------------//
router.get('/forgot/:token', authController.gotoReset);

//------------ Login POST Handle ------------//
router.post('/login', authController.loginHandle);

//------------ Logout GET Handle ------------//
router.get('/logout', authController.logoutHandle);

module.exports = router;