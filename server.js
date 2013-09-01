var express = require('express'),
    port = process.env.PORT || 4000,
    serverUrl = 'http://localhost:' + port;

var cyan = '\u001b[36m',
    yellow = '\u001b[33m',
    white = '\u001b[37m',
    underline = '\u001b[4m',
    reset = '\u001b[0m';

var app = express();

app.configure(function(){
  app.use(express.static(__dirname + '/examples'));
  app.use(express.static(__dirname + '/build'));

  app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));

  app.use(app.router);
});

app.get('/', function(req, res){
  res.redirect('/index.html');
});

app.listen(port);

console.log(yellow + 'Quorra'
            + reset + ' examples running on '
            + cyan + underline + serverUrl
            + reset);

