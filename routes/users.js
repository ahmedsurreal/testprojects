const express = require('express');
const router = express.Router();

//Login
router.get('/login', (req, res) => res.send('Login'));

//Register
router.get('/Register', (req, res) => res.send('Register'));

module.exports = router;