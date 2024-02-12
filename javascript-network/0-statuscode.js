// importing the request module
const request = require('request');
// taking url from the command-line argument 

const url = process.argv[2];
// checking if the url is provided in the command-line argument if not raise an error message
if (!url) {
  console.error('Usage: node script.js <URL>');
  process.exit(1);
}
/**
 * in this code we will request to the url we get from the command-line argument 
 * we used a callback function that will be executed when the request is completed and it will pass to error if it's error or will pass to response if response....
 * checkes if there is any error if it will print error message
 * if everything is good it will print status code of the response
 *  */ 
request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }
  console.log(`code: ${response.statusCode}`);
});
