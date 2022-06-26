const express = require('express');
const router = express.Router()

const credential = {
    email: 'juju@gmail.com',
    password: 'juju123'
}
// login user
router.post('/login', (req, res) => {
    const email = req.body.email
    const password = req.body.password
    if (email === credential.email && password === credential.password) {
        req.session.user = req.body.email
        res.redirect('/route/dashboard')
    } else {
        res.end('Invalid username or password')
    }
})

router.get('/dashboard', (req, res) => {
    res.send('Login successful')
})

module.exports = router