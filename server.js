var express= require("express");

var bodyparser = require("body-parser")

var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
  });

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({extended:false}))

var productAPI = require("./controllers/product.controller")

app.use("/api/product",productAPI)

app.listen(8080);
console.log("server up and running on port 8080")