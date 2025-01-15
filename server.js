// server.js
const config = require('./config');

console.log('API Key:', config.apiKey);

// Additional server code (e.g., Express setup)
const express = require('express');
const app = express();

const port = config.port;

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
