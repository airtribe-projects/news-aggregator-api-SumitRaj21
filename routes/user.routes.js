const router = require('express').Router();
const auth = require('../middlewares/auth.middleware');
const User = require('../models/user.model');
const asyncHandler = require('../utils/asyncHandler');

/**
 * GET /api/users/me
 * Get logged-in user profile
 */
router.get(
  '/me',
  auth,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  })
);

module.exports = router;
