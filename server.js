var express = require('express')
var server = require('http').createServer(app);//
var port = process.env.PORT || 8000;//
var app = express();


require('./config/middleware.js') (app,express); //
require('./config/routes.js') (app,express); //
////////////////////server////////////////////////////
app.listen(port, function () {
  console.log(' app listening on port '+ port);//
})