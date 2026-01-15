const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const ApiError = require('../utils/apiError');
const asyncHandler = require('../utils/asyncHandler');

exports.signup = asyncHandler(async (req, res) => {
  const { name, email, password, preferences = [] } = req.body;

  if (!email || !password || !name) {
    throw new ApiError(400, 'Missing required fields');
  }

  if (await User.findOne({ email })) {
    throw new ApiError(409, 'User already exists');
  }

  const hashed = await bcrypt.hash(password, 10);

  await User.create({
    name,
    email,
    password: hashed,
    preferences
  });

  res.status(200).json({ message: 'Signup successful' });
});

exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) throw new ApiError(401, 'Invalid credentials');

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new ApiError(401, 'Invalid credentials');

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.status(200).json({ token });
});
