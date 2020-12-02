// element.js
// Luke Cotton
// Gets element objects.

// Imports
var conn = require("./conn.js");

// SQL.
const selectSQL = 
    "SELECT * " +
    "FROM elements ";

const lookupSQL =
    selectSQL + "WHERE element_symbol = ?";

// Constructor.
class Element {
    constructor(symbol, name, weight) {
        this.symbol = symbol;
        this.name = name;
        this.weight = weight;
        this.isFetched = false;
    }
    // Fetches an element using MySQL.
    fetchElement(callback) {
        // If we are fetched, then call the callback.
        if (this.isFetched) {
            callback();
            return;
        }

        // Our object.
        var element = this;
        // Open a connection.
        var dbconn = conn.openConn();
        dbconn.connect(function (err) {
            // Query for our element.
            if (err) { callback(err); }
            dbconn.query(lookupSQL, [element.symbol], function (err, results) {
                // Handle errors.
                if (err) {
                    dbconn.end(function (endErr) {
                        if (endErr) {
                            callback(endErr);
                        } else {
                            callback(err);
                        }
                    });
                    return;
                }

                // Make sure we have an element.
                if (results.length == 0) {
                    dbconn.end(function (endErr) {
                        if (endErr) {
                            callback(endErr);
                        } else {
                            callback(new Error("Could not find element."));
                        }
                    });
                    return;
                }

                // Get result.
                var result = results[0];

                console.log(result);

                // Retrieve element fields and fill our object.
                element.symbol = result.element_symbol;
                element.name = result.element_name;
                element.weight = result.weight;

                // Close the connection.
                dbconn.end(function (err) {
                    if (err) {
                        callback(err);
                    } else {
                        // Call our callback
                        element.isFetched = true;
                        callback();
                    }
                });
            });
        });
    }
}


module.exports = Element;