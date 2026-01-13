const router = require('express').Router();
const auth = require('../middlewares/auth.middleware');
const c = require('../controllers/news.controller');

router.get('/', auth, c.getNews);

module.exports = router;
