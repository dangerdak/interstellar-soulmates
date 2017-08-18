const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const controllers = require('./controllers/index');
const helpers = require('./views/helpers/index');
const bodyParser = require('body-parser');
const session = require('express-session');



const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', exphbs({
  extname: 'hbs',
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'views', 'partials'),
  defaultLayout: 'main',
  helpers: 'helpers'
}));

app.set('port', process.env.PORT || 4001);
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 60000
  }
}));

app.use(controllers);

module.exports = app;
