const request = require('request')

const url = "https://swapi.dev/api/people/1"

request(url, function(error, response, body){
    if (error) {
        console.error(error);
    } else {
        console.log("code:" +' '+response.statusCode);
    }
});