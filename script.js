$(document).ready(function(){
    $(".menu-icon").click(function(){
      $(".mobil-menu-container").toggleClass("mobile-menu-show");
    });
  });
  
  function myFunction(x) {
    x.classList.toggle("change");
  }

  const express = require('express');
const app = express();

app.get('/', function(request, response){
    response.sendFile('index.html');
});
  
  