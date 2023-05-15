const router = require('express').Router();
const {User} = require('../../models');

router.get('/users', async (req, res) => {
    try {
        const userData = await User.findAll();
        const users = userData.map((user) => user.get({plain: true}));
        res.render('users', {users});
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/users/:userId', async (req, res) => {
    try {
        const {userId} = req.params;
        const userData = await User.create(req.body);
        res.status(200).json(userData);

        res.render('user_profile', {userData});
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;