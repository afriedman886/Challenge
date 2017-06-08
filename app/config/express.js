var config = require('./config');
var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');


module.exports = function() {
    var app = express();

    app.use(passport.initialize());
    app.use(passport.session());

    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: 'SuperSecretCookieSecret'
    }));

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());

    app.use(flash());

    app.set('views', '../views');
    app.set('view engine', 'ejs');

    require('../routes/index.server.routes.js')(app);
    require('../routes/patients.server.routes.js')(app);

    app.use(express.static('../../public'));

    return app;
};

