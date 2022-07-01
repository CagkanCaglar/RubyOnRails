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


  // save static files like images, scripts and css in `public`...
app.use(express.static(__dirname + '/'))
app.get("/", function (req, res) {
  res.sendFile(__dirname+ "index.html");
});

