// index.js
// Luke Cotton
// Entry point for the molar mass calculator server backend.

var express = require('express');

var calculate = require("./calculate_router.js");

var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/calculate", calculate);

app.get("/", function(req, res) {
    res.write("Hello, World!\n");
    res.end();
});

app.listen(3000);