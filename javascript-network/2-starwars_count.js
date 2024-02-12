// importing the request module
const request = require('request');

// getting the api url from the command-line argument
const apiUrl = process.argv[2];

// checking if the api url is provded if not will print an error message
if (!apiUrl) {
  console.error('Usage: node 2-starwars_count.js <API_URL>');
  process.exit(1);
}

// declaring Character ID of Wedge Antilles
const WEDGE_ANTILLES_ID = '18';
/**
 * making request to the api url which is gotten from the commsnd line argument
 * as usual we have a call back function whivh will be executed after the request is completed and after the request complted it will pass it to the call back function as error if it's error to response if it's response and so on..
 * checks if there is any error if i will print error message if not it will continue
 * and again checks if the response status code is 200 which means succesfull if not it wil print error message
 * then we declared a variable which we will store the data we recieved filtered which is the results which contain the movie information from the response 
 * then we decalred another variable which we will store filtered data which contain the character id of WEDGE_ANTILLES from the api url and count amount of number which Wedge Antilles is present from the variable films which stored the data recieved from the response
 * then we will print the number of movies Wedge Antilles is present
 */
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
    film.characters.includes(`${apiUrl}${WEDGE_ANTILLES_ID}/`)
  ).length;

  console.log(numberOfMovies);
});
