const User = require('../models/User.model');
const asyncHandler = require('../utils/asyncHandler');

exports.getPreferences = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json(user.preferences);
});

exports.updatePreferences = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.user.id,
    { preferences: req.body },
    { new: true }
  );

  res.json(user.preferences);
});
