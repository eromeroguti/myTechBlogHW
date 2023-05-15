const sequelize = require('sequelize');
require('dotenv').config();

const Sequelize = new sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: '127.0.01',
        dialect: 'mysql',
        port: 3306
    }
);

module.exports = Sequelize;
