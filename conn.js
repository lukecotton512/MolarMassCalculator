// conn.js
// Luke Cotton
// Handles connection details.
// Meant to be kept private.

// Imports
var mysql = require("mysql");

// Open a connection.
function openConn() {
    var connDetails = {
        host: "localhost",
        user: "mmcuser",
        password: "mmcpassword1234",
        database: "molarmasscalculator"
    };

    return mysql.createConnection(connDetails);
}

// Export it.
module.exports.openConn = openConn;