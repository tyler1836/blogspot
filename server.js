const express = require('express');
const routes = require('./controllers')
const sequelize = require('./config/connection.js')
const path = require('path');
const exphbs = require('express-handlebars');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3001;

const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store)

const sess = {
  secret: 'key',
  cookie: {
    maxAge: 15*60*1000
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

 // allows use of session. in handlebars such as #if session.loggedIn
 app.use(session(sess));
 app.use(function (req, res, next) {
     res.locals.session = req.session;
     next();
 });



const hbs = exphbs.create({});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes)

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');






sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});