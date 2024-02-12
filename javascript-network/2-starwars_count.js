const request = require('request');

const apiUrl = process.argv[2];

if (!apiUrl) {
  console.error('Usage: node 2-starwars_count.js <API_URL>');
  process.exit(1);
}

const WEDGE_ANTILLES_ID = '18';

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error('Error:', response.body);
    return;
  }

  const films = JSON.parse(body).results;
  const numberOfMovies = films.filter(film =>
    film.characters.some(characterUrl => characterUrl.includes(`/${WEDGE_ANTILLES_ID}/`))
  ).length;

  console.log(numberOfMovies);
});
