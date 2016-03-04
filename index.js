var express = require('express');
var app = express();
app.use(express.static(__dirname + '/www'));
app.set('port', (process.env.PORT || 5000));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// views is directory for all template files
app.set('views', __dirname + '/www');
app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res)
{
    res.render('index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});









