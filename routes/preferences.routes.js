const router = require('express').Router();
const auth = require('../middlewares/auth.middleware');
const c = require('../controllers/preference.controller');

router.get('/', auth, c.getPreferences);
router.put('/', auth, c.updatePreferences);

module.exports = router;
