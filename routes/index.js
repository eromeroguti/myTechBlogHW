const router = require('express').Router();
const htmlRoutes = require('./htmlRoutes');
const apiRoutes = require('./api');

router.use(htmlRoutes);

router.use('/api', apiRoutes);  // <--- Add this line

module.exports = router;