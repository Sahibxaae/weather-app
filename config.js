require('dotenv').config();

module.exports = {
  apiKey: process.env.API_KEY,
  port: process.env.PORT || 3000, // Default port to 3000 if not provided
};
