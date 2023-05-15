const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const routes = require('./routes');
const exphbs = require('express-handlebars');
const session = require('express-session');
const sequelize = require('./config/connection');
// const helpers = require('./utils/helpers');

dotenv.config();

const hbs = exphbs.create({
  // helpers
});

const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
});