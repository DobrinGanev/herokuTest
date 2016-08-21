var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var request = require('request');
var OAuth   = require('oauth-1.0a');
var oauth = OAuth({
    consumer: {
        public: 'Dummy',
        secret: 'secret'
    },
    signature_method: 'HMAC-SHA1'
});
// var qs = require('querystring');
// var oauth = {
//   callback: 'http://mysite.com/callback/',
//   consumer_key: 'Dummy',
//   consumer_secret: 'secret',
//   signature_method: 'RSA-SHA1'
// };
// var url = 'https://www.appdirect.com/AppDirect/rest/api/events/dummyChange';


var request_data = {
    url: 'https://www.appdirect.com/AppDirect/rest/api/events/dummyChange',
    method: 'GET',
    data: {
        status: 'Hello Ladies + Gentlemen, a signed OAuth request!'
    }
};
request({
    url: request_data.url,
    method: request_data.method,
    form: request_data.data,
    headers: oauth.toHeader(oauth.authorize(request_data))
}, function(error, response, body) {
    console.log(body)
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/create', function (req, res) {
  console.log(req.eventData)
  var create = {
  "success": "true",
  "accountIdentifier": "new-account-identifier"
}
  res.send(create);
});
app.get('/cancel', function (req, res) {
  console.log(req.eventData)
  var cancel = {
  "success": "true",
  "accountIdentifier": "new-account-identifier"
}
  res.send(cancel);
});
app.get('/update', function (req, res) {
  console.log(req.eventData)
  var update = {
  "success": "true",
  "accountIdentifier": "new-account-identifier"
}
  res.send(update);
});


app.get('/status', function (req, res) {
  console.log(req.eventData)
  var status = {
  "success": "true",
  "accountIdentifier": "new-account-identifier"
}
  res.send(status);
});

//user
app.get('/user/assign', function (req, res) {
  console.log(req.eventData)
  var assign = {
  "success": "true",
  "accountIdentifier": "new-account-identifier"
}
  res.send(assign);
});
app.get('/user/unassign', function (req, res) {
  console.log(req.eventData)
  var unassign = {
  "success": "true",
  "accountIdentifier": "new-account-identifier"
}
  res.send(unassign);
});
app.get('/addon/bind', function (req, res) {
  console.log(req.eventData)
  var bind = {
  "success": "true",
  "accountIdentifier": "new-account-identifier"
}
  res.send(bind);
});

app.get('/addon/unbind', function (req, res) {
  console.log(req.eventData)
  var unbind = {
  "success": "true",
  "accountIdentifier": "new-account-identifier"
}
  res.send(unbind);
});



app.get('/login', function(req, res){
  res.render('login');
});
app.get('/index', function(req, res){
  res.render('index');
});


app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
module.exports = app;
