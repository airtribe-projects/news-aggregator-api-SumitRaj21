const jwt = require('jsonwebtoken');
const ApiError = require('../utils/apiError');

module.exports = (req, res, next) => {
  const header = req.headers.authorization;

  if (!header?.startsWith('Bearer ')) {
    return next(new ApiError(401, 'Token missing'));
  }

  try {
    req.user = jwt.verify(header.split(' ')[1], process.env.JWT_SECRET);
    next();
  } catch {
    next(new ApiError(401, 'Invalid token'));
  }
};
