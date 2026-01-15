const User = require('../models/user.model');
const asyncHandler = require('../utils/asyncHandler');
const newsService = require('../services/news.service');

exports.getNews = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  const articles = await newsService.getNewsFromGNews({
    preferences: user.preferences,
    query: req.query.q
  });

  res.status(200).json({
    news: articles
  });
});
