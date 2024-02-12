// imported request module
const request = require('request');
// imported fs module
const fs = require('fs');
// getting url which will make request from the command line-argument
const url = process.argv[2];
// getting  the filepath to save the file from the command- line argument
const filePath = process.argv[3];
// checking if both arguments has been passed from the command-line argument if not will print error message if it will continue
if (!url || !filePath) {
  console.error('Usage: node 3-request_store.js <URL> <file_path>');
  process.exit(1);
}
/**
 * making request to the url recieved from the command-line argument 
 * and we have a call back function whivh will be executed after the request is completed and after the request complted it will pass it to the call back function as error if it's error to response if it's response and so on..
 * checks if there is any error if i will print error message if not it will continue
 * and again checks if the response status code is 200 which means succesfull if not it will print error message
 * then we use the fs.writefile function to write the file of the body to the file path provided from the command line argument 
 * we make sure it's utf - 8 making it human readable
 * then checking if there is ant error if it will print error message
 * if no error message then it will print a succesfull message that tells that the file has been written
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

  fs.writeFile(filePath, body, { encoding: 'utf-8' }, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return;
    }
    console.log(`Body response from ${url} has been saved to ${filePath}`);
  });
});
