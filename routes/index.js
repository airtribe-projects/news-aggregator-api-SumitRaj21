const router = require('express').Router();

router.use('/auth', require('./auth.routes'));
router.use('/users', require('./user.routes'));
router.use('/preferences', require('./preferences.routes'));
router.use('/news', require('./news.routes'));

module.exports = router;
