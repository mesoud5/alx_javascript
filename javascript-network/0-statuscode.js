//const request = require('request')

//const URL = "https://swapi.dev/api/people/1"

request(URL, function(error, response, body){
    if (error) {
        console.error(error);
    } else {
        console.log("code:" +' '+response.statusCode);
    }
});