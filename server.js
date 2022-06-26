const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const {v4: uuidv4} = require('uuid')
const app = express();
const router = require('./router')
const PORT = process.env.PORT || 8000;


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

// initializing the view engines
app.set('view engine', 'ejs')
//load static assets
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))
app.use(
  session({
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true,
  })
);
app.use('/route', router)
// home route

app.get('/', (req, res) => {
    res.render('base', {
        title: "Login System",
    })
})