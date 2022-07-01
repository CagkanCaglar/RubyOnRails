var express = require('express');
var bodyParser = require('body-parser');
var app = express();


$(document).ready(function(){
    $(".menu-icon").click(function(){
      $(".mobil-menu-container").toggleClass("mobile-menu-show");
    });
  });
  
  function myFunction(x) {
    x.classList.toggle("change");
  }


var express = require('express');
var app = express();
var path = require('path');


app.use(express.static(path.join(__dirname, '/')));


app.get('/json', function(req, res) {
    console.log("GET the json");
    res
        .status(200)
        .json( {"jsonData" : true} );
});

app.get('/file', function(req, res) {
    console.log("GET the file");
    res
        .status(200)
        .sendFile(path.join(__dirname, 'script.js'));
});



const server = app.listen(process.env.PORT || 5000, () => {
  const port = server.address().port;
  console.log(`Express is working on port ${port}`);
});