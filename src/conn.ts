// conn.js
// Luke Cotton
// Handles connection details.
// Meant to be kept private.

// Imports
import pg from 'pg';

import Config from "./config";

// Our configuration.
var config = Config.defaultConfig();

// Open a connection.
export function openConn() {
    var connDetails: pg.ClientConfig = {
        host: config.dbhostname || "localhost",
        port: config.dbport || 5432,
        user: config.dbuser || "user",
        password: config.dbpassword || "password",
        database: config.dbdatabase || "molarmasscalculator"
    };

    return new pg.Client(connDetails);
}
