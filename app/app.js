// var http = require('http');
//
// var myServer = http.createServer(function (request,response) {
//   response.writeHead(200,{"Content-Type":"text/html"});
//
//   response.write('<h1>Roux Meetups</h1>');
//
//   response.end();
// });
//
// myServer.listen(3000);
// console.log('Go to localhost 3000 on your browser');

var express = require('express');
var app = express();
app.get('/',function(req,res){
  res.send('<h1>Roux Academy Meetups</h1>');
});

var server = app.listen(3000,function() {
  console.log('Listen 3000');
})
