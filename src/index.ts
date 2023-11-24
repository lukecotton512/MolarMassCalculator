// index.js
// Luke Cotton
// Entry point for the molar mass calculator server backend.

import express from "express";

import { calculate_router } from "./calculate_router";

import Config from "./config"

import process from "process";

let config: Config;
if (process.argv.length === 3) {
    config = Config.defaultConfig(process.argv[2]);
} else {
    config = Config.defaultConfig();
}

// Start the app using express.
var app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/calculate", calculate_router);

app.get("/", (req, res) => {
    res.write("Hello, World!\n");
    res.end();
});

var listen_address = config.listen_address != null ? config.listen_address : "127.0.0.1";
var server = app.listen(config.httpport, listen_address);

// Setup handler to handle SIGTERM (mainly from Docker).
process.on("SIGTERM", () => {
    console.log("Received SIGTERM, exiting.");
    server.close();
});