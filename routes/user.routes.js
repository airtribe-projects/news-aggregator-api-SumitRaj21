const router = require('express').Router();
const auth = require('../middlewares/auth.middleware');

const authController = require('../controllers/auth.controller');
const prefController = require('../controllers/preference.controller');

router.post('/signup', authController.signup);
router.post('/login', authController.login);

router.get('/preferences', auth, prefController.getPreferences);
router.put('/preferences', auth, prefController.updatePreferences);

module.exports = router;
