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


  app.use(express.static('./'));

  app.get('/', function(req, res) { 
      res.render('index.html');
  });