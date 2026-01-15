const User = require('../models/user.model');
const asyncHandler = require('../utils/asyncHandler');

exports.getPreferences = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  res.status(200).json({ preferences: user.preferences });
});

exports.updatePreferences = asyncHandler(async (req, res) => {
  const { preferences } = req.body;

  const user = await User.findByIdAndUpdate(
    req.user.id,
    { preferences },
    { new: true }
  );

  res.status(200).json({ preferences: user.preferences });
});
