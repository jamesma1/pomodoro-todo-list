const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { Router } = require('express');

// import routers
const loginRouter = require('./routes/login');
const signupRouter = require('./routes/signup');
const { resolve } = require('path');

const app = express();
const PORT = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// serve up static files and load index.html
app.use(express.static(path.resolve(__dirname, '../src')));

// to serve up webpage in production mode
app.get('/', (req, res) => {
    res.status(200).send(path.resolve(__dirname, '../src/index.html'));
})

// handle routes
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.get('/signout', (req, res) => {
    res.clearCookie('username');
    return res.status(200).redirect('/');
})

// upon login, set a cookie and send the main app page
// 

app.use((err, req, res, next) => {
    const defaultError = {
        log: 'Express error handler caught unknown middleware error.',
        status: 400,
        message: {err: 'An error occurred.'},
    };
    const errorObj = Object.assign({}, defaultError, err);
    console.log('ERROR: ', errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
})

const CONNECTION_URL = 'mongodb+srv://jamesma1:7iPdUmgzZXDRZxHR@cluster0.6quyp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`)))
    .catch((error) => console.log(error.message));


module.exports = app;