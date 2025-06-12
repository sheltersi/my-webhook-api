const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Webhook Sort API is running. Use POST /api/index with JSON payload.');
})

app.post('/', (req, res) => {
  const { data } = req.body;

  if (typeof data !== 'string') {
    return res.status(400).json({ error: 'Invalid input. "data" must be a string.' });
  }

  const sortedArray = data.split('').sort();
  return res.json({ word: sortedArray });
});

module.exports = app;
