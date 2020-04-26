// conn.js
// Luke Cotton
// Handles connection details.
// Meant to be kept private.

// Imports
var mysql = require("mysql");

var server_config = require("./config/config.js");

// Our configuration.
var config = server_config.defaultConfig();

// Open a connection.
function openConn() {
    var connDetails = {
        host: config.dbhostname || "localhost",
        port: config.dbport || 3306,
        user: config.dbuser || "user",
        password: config.dbpassword || "password",
        database: config.dbdatabase || "molarmasscalculator"
    };

    return mysql.createConnection(connDetails);
}

// Export it.
module.exports.openConn = openConn;