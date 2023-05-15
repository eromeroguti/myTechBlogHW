const router = require('express').Router();
const {User} = require('../../../models'); 

router.get('/singup', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        req.session.save(() => {
            req.session.user_id = userData.id;
            if (req.session.user_id) {
                res.redirect('/dashboard');
            } else {
                res.status(400).json({message: 'No user with this id!'});
                return;
            }
            res.redirect('/dashboard');
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


router.post('/logout', (req, res) => {
    req.session.destroy(() => {
        res.json({message: 'You are now logged out!'});
    });
});


module.exports = router;