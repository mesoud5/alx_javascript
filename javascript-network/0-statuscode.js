//const request = require('request')

//const endpoint = "https://swapi.dev/api/people/1"

request(endpoint, function(error, response, body){
    if (error) {
        console.error(error);
    } else {
        console.log("code:" +' '+response.statusCode);
    }
});