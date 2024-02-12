// importing the request module
const request = require('request');

// getting the movie id from the command-line argument
const movieId = process.argv[2];

// checking if this two conditions are false or true (checking if movie id is provided and checking if the provided movie id is integer ) if both are false which means movie id is provided and is a number it will continue but if one of them or both are true it will print an error meassage
if (!movieId || isNaN(movieId)) {
  console.error('Usage: node 1-starwars_title.js <movieID>');
  process.exit(1);
}
// url which we will make request and the id of the movie which we will get from the command line argument
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

/**
 * here we are making request to the url provide declared above
 * and we have a call back function whivh will be executed after the request is completed and after the request complted it will pass it to the call back function as error if it's error to response if it's response and so on..
 * checks if there is any error if i will print error message if not it will continue
 * and again checks if the response status code is 200 which means succesfull if not it will print error message
 * then if it pass the above checks it will create a variable named moviedata and put the response body in this variable and change it in to json format
 * then it will extract the title of the movie based on the provided id 
 */

request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error('Error:', response.body);
    return;
  }

  const movieData = JSON.parse(body);
  console.log(movieData.title);
});
