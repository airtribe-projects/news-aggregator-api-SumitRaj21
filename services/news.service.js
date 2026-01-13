const axios = require('axios');

exports.fetchNews = async ({ categories, language, q, page, limit }) => {
  const params = {
    token: process.env.NEWS_API_KEY,
    lang: language,
    max: limit,
    page,
    q
  };

  if (categories?.length) params.topic = categories[0];

  const res = await axios.get(
    `${process.env.NEWS_API_BASE_URL}/top-headlines`,
    { params }
  );

  return res.data.articles;
};
