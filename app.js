'use strict';

const express = require('express');
const app = express();
const logger = require('morgan');
const http = require('http');
const port = (process.env.PORT || 8080);
require('dotenv').config();
const bodyParser = require('body-parser');
const baseApi = '/api/v1';
const flash = require('connect-flash');
const passport = require('passport');
const BearerStrategy = require('passport-http-bearer').Strategy;
const usersList = require('./users-list');

/** SECURITY **/

passport.use(new BearerStrategy(
    function (token, done) {
        console.log("Finding by token: " + token);
        usersList.findByToken(token, function (err, user) {
            console.log('User found: ', user);
            if (err) {
                console.log('err');
                return done(err);
            }
            if (!user) {
                console.log('nouser');
                return done(null, false);
            }
            return done(null, user);
        });
    }
));

/** ROUTERS **/

const users = require('./routes/users');
app.use(baseApi + '/users', passport.authenticate('bearer', {session: false}), users);

/***** *****/

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(flash());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/', function (req, res) {
    res.render('index', {title: 'Express'});
});

const server = http.createServer(app);

server.listen(port, function () {
    console.log("Server with GUI up and running!");
});

module.exports = app;