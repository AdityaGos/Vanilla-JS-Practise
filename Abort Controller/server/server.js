// server.js
const express = require('express');
const { movieData } = require('../src/data');
const bodyParser = require('body-parser')

const app = express();
const PORT = 3000;
const cors = require('cors')
app.use(cors());
app.use(bodyParser.json())
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

  app.get('/', (req, res) => { res.json('connected'); });
// API endpoint to search data
app.post('/search', (req, res) => {
  // const searchedMovieKeyword = req.body.searchVal;
  const searchedMovieKeyword = req.body.searchVal;
  console.log(searchedMovieKeyword)

  // Perform a simple case-insensitive search
  const result = movieData.filter((movie) => {
    const titleLower = movie.title.toLowerCase();
    const keywordLower = searchedMovieKeyword.toLowerCase();
    return titleLower.includes(keywordLower);
  });

  res.json({ result});
});


