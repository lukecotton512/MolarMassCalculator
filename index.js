// index.js
// Luke Cotton
// Entry point for the molar mass calculator server backend.

var express = require('express');

var calculate = require("./calculate_router.js");

var server_config = require("./config/config.js");

var process = require("process");

var config = server_config.defaultConfig();

// Start the app using express.
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

// Setup handler to handle SIGTERM (mainly from Docker).
process.on("SIGTERM", () => {
    console.log("Received SIGTERM, exiting.");
    server.close();
});

var listen_address = config.listen_address != null ? config.listen_address : "127.0.0.1";
app.listen(config.httpport, listen_address);