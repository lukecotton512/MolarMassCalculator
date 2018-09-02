// index.js
// Luke Cotton
// Entry point for the molar mass calculator server backend.

var express = require('express');

var calculate = require("./calculate_router.js");

var app = express();

app.use("/calculate", calculate);

app.get("/", function(req, res) {
    res.write("Hello, World!\n");
    res.end();
});

app.listen(3000);