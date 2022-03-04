const express = require('express');
const path = require('path');
const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController')


const router = express.Router();

// get items from database
router.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../../src/signup.html'));
});

router.post('/', userController.createUser, cookieController.setCookie, (req, res) => {
    return res.status(200).redirect('/');
});



module.exports = router;