// element.js
// Luke Cotton
// Gets element objects.

// Imports
var mysql = require("mysql");

var conn = require("./conn.js");

// SQL.
const selectSQL = 
    "SELECT * " +
    "FROM elements ";

const lookupSQL =
    selectSQL + "WHERE element_symbol = ?";

// Constructor.
function Element(symbol, name, weight) {
    this.symbol = symbol;
    this.name = name;
    this.weight = weight;
    this.isFetched = false;
}

// Fetches an element using MySQL.
Element.prototype.fetchElement = function(callback) {
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
        dbconn.query(lookupSQL, [element.symbol], function(err, results) {
            // Handle errors.
            if (err) { 
                dbconn.end(function (err) {
                    if (err) { callback(err); }
                });
                callback(err);
            }
            
            // Make sure we have an element.
            if (results.length == 0) {
                callback(new Error("Could not find element"));
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
                if (err) { callback(err); }
            });

            // Call our callback
            this.isFetched = true;
            callback();
        });
    });
}

module.exports = Element;