var express = require('express');
var request = require('request');
var session = require("express-session");
var app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

//Initialisation de la sessionapp.use(
app.use(
 session({ 
  secret: 'a4f8071f-c873-4447-8ee2',
  resave: false,
  saveUninitialized: false,
 })
);

function home(req,res)
{
  res.render('index', {
  });
}

app.get('/', function (req, res) {
    home(res,res);
});

app.get('/home', function (req, res) {
    home(res,res);
});

app.get('/cart', function (req, res) {
  var model = req.query.model;
  var price = req.query.price;
  var element = {model,price};
  if (!req.session.cart)
    req.session.cart = [];
  if (model && price)
    req.session.cart.push(element);
  console.log(req.session.cart);
  res.render('cart', {cart : req.session.cart

  });
});

app.listen(80, function () {
  console.log("Server listening on port 80");
});