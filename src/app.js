const express = require('express');
const exphbs = require('express-handlebars');

const path = require('path');

const controllers = require('./controllers/index');
const helpers = require('./views/helpers/index');
const bodyparser = require('body-parser');

const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', exphbs({
  extname: 'hbs',
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'views', 'partials'),
  defaultLayout: 'main',
  helpers: 'helpers'
})
);

app.set('port', process.env.PORT || 4001);
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(controllers);

module.exports = app;
