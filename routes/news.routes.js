const router = require('express').Router();
const auth = require('../middlewares/auth.middleware');
const controller = require('../controllers/news.controller');

router.get('/', auth, controller.getNews);

module.exports = router;
