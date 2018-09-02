// calculate.js
// Luke Cotton
// Calculation methods.

// Imports
var Element = require("./element.js");

var stringmethods = require("./stringmethods.js");

// Function to parse and calculate our molar mass.
function calculateMolarMass(compound, callback) {
    // Loop through the string.
    const length = compound.length;
    
    var currentSymbol = "";
    var currentNumber = "";
    var elementQueue = [];
    for (var i = 0; i < length; i++) {
        var character = compound.substring(i, i + 1);
        
        // Do something appropriate based on the character.
        if (stringmethods.is_upper(character)) {
            // If we are at the beginning of the string, then just append and continue.
            if (!i == 0) {
                // We have a new element, so add it to the weight
                // and reset the current symbol.
                var element = new Element(currentSymbol);
                var multiplier = 1;
                if (currentNumber != "") {
                    multiplier = parseInt(currentNumber);
                }
                elementQueue.push({element: element, multiplier: multiplier});
            }
            currentSymbol = character;
            currentNumber = "";
        } else if (stringmethods.is_lower(character)) {
            // Make sure the formula is valid.
            if (i == 0) {
                callback(null, new Error("Error: invalid formula."));
                return;
            }
            // Append the character and move on.
            currentSymbol += character;
        } else if (stringmethods.is_numeric(character)) {
            // Make sure the formula is valid.
            if (i == 0) {
                callback(null, new Error("Error: invalid formula."));
                return;
            }
            // Append the number and move on.
            currentNumber += character;
        } else {
            // Return an error, there is an invalid character in the formula.
            callback(null, new Error("Invalid character in element"));
            return;
        }
    }

    // Make sure there is nothing left.
    if (currentSymbol != "" || currentNumber != "") {
        var element = new Element(currentSymbol);
        var multiplier = 1;
        if (currentNumber != "") {
            multiplier = parseInt(currentNumber);
        }
        elementQueue.push({element: element, multiplier: multiplier});
    }

    // Fetch and get the weights.
    var i = 0;
    var weight = 0.0;
    var error = null;
    elementQueue.forEach(function (item) {
        if (error == null) {
            item.element.fetchElement(function(err) {
                if (!err) {
                    // Add to the current weight.
                    weight += item.element.weight * item.multiplier;
                } else {
                    error = err;
                }

                // Check if we are at the end or not.
                if (error != null ) {
                    callback(null, error);
                } else if (i == elementQueue.length - 1) {
                    // Call the callback with our weight.
                    callback(weight);
                } else {
                    // Keep going.
                    i++;
                }
        });
        }
    });
}

// Export it.
module.exports.calculateMolarMass = calculateMolarMass;