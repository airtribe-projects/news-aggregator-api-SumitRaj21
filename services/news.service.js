const axios = require('axios');
const ApiError = require('../utils/apiError');

exports.getNewsFromGNews = async ({ preferences = [], query }) => {
  try {
    const params = {
      token: process.env.NEWS_API_KEY,
      lang: 'en',
      max: 10
    };

    // If user has preferences, use first as topic
    if (preferences.length > 0) {
      params.topic = preferences[0];
    }

    // Optional search query
    if (query) {
      params.q = query;
    }

    const response = await axios.get(
      `${process.env.NEWS_API_BASE_URL}/top-headlines`,
      { params }
    );

    return response.data.articles;
  } catch (err) {
    throw new ApiError(502, 'Failed to fetch news from external API');
  }
};
