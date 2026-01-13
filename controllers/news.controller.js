const User = require('../models/User.model');
const newsService = require('../services/news.service');
const cache = require('../utils/cache');
const cacheKey = require('../utils/cacheKey');
const asyncHandler = require('../utils/asyncHandler');

exports.getNews = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  const { page = 1, limit = 10, q, category } = req.query;

  const preferences = {
    ...user.preferences.toObject(),
    categories: category ? [category] : user.preferences.categories
  };

  const key = cacheKey({ preferences, page, limit, q });
  const cached = cache.get(key);

  if (cached) return res.json({ source: 'cache', articles: cached });

  const articles = await newsService.fetchNews({
    ...preferences,
    page,
    limit,
    q
  });

  cache.set(key, articles);
  res.json({ source: 'api', articles });
});
