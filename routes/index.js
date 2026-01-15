const router = require('express').Router();

router.use('/users', require('./user.routes'));
router.use('/news', require('./news.routes'));

module.exports = router;
