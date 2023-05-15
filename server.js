const express = require('express');
const dotenv = require('dotenv');   
const sequelize = require('./config/connection');
const routes = require('./routes');


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});