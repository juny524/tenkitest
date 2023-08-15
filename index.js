var request = require('request');
var fs = require('fs');
var options = {
  url: 'https://weather.tsukumijima.net/api/forecast/city/290010',
  method: 'GET'
}

request(options, function(error, response, body){
  var text = body;
  fs.writeFile('/var/www/html/json/otenki.json', text, (err)=>{}); 
})
