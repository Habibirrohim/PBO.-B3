const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../config/db');

// Render halaman register
router.get('/register', (req, res) => {
    res.render('register');
});

// Proses register user
router.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.render('register', { error: 'Please fill in all fields.' });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    
    const query = "INSERT INTO user (username, email, password) VALUES (?, ?, ?)";
    db.query(query, [username, email, hashedPassword], (err, result) => {
        if (err) {
            console.error(err);
            return res.render('register', { error: 'Error registering user.' });
        }
        res.redirect('/auth/login');
    });
});

// Render halaman login
router.get('/login', (req, res) => {
    res.render('login');
});

// Proses login user
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    const query = "SELECT * FROM user WHERE username = ?";
    db.query(query, [username], (err, result) => {
        if (err) {
            console.error(err);
            return res.render('login', { error: 'Error logging in.' });
        }

        if (result.length > 0) {
            const user = result[0];

            if (bcrypt.compareSync(password, user.password)) {
                req.session.user = user;
                return res.redirect('/logistik');
            } else {
                return res.render('login', { error: 'Incorrect password' });
            }
        } else {
            return res.render('login', { error: 'User not found' });
        }
    });
});

// Proses logout
router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Error destroying session:', err);
        }
        res.redirect('/auth/login');
    });
});

module.exports = router;