
/**
 * Module dependencies.
 */

const express = require('express');
const errorhandler = require("errorhandler");
const http = require("http");
const routes = require('./routes');

const app = express();

// Configuration
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.use(express.static(__dirname + '/public'));
app.engine('jsx', require('express-react-views').createEngine());

app.set('port', process.env.PORT || 3000);

var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
  app.use(errorhandler({ dumpExceptions: true, showStack: true }));
} else {
  app.use(errorhandler());
}

// Routes
app.get('/', routes.index);

http.createServer(app).listen(app.get('port'),
    function(){
      console.log("Express server listening on port " + app.get('port'));
    });
