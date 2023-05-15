const sequelize = require('../config/connection');

const {User} = require('../models');

const seedDb = async () => {
    await sequelize.sync({force: true});

    await User.bulkCreate([
        {
        username: 'user1',
        password: 'password1',    
        },
        {
        username: 'user2',
        password: 'password2',
        },
        {
        username: 'user3',
        password: 'password3',
        }
    ]);
    process.exit(0);
};
seedDb();