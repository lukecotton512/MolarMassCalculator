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
    var subformula = "";
    var elementQueue = [];
    var elementCache = {};
    for (var i = 0; i < length; i++) {
        var character = compound.substring(i, i + 1);
        
        // Do something appropriate based on the character.
        if (stringmethods.is_upper(character) || character == "(") {
            // If we are at the beginning of the string, then just append and continue.
            if (!i == 0) {
                // We have a new element, so add it to the weight
                // and reset the current symbol.
                if (subformula != "") {
                    var multiplier = 1;
                    if (currentNumber != "") {
                        multiplier = parseInt(currentNumber);
                    }
                    elementQueue.push({subformula: subformula, multiplier: multiplier});
                    subformula = "";
                } else {
                    var element = elementCache[currentSymbol];
                    if (element == null) {
                        element = new Element(currentSymbol);
                        elementCache[currentSymbol] = element;
                    }
                    var multiplier = 1;
                    if (currentNumber != "") {
                        multiplier = parseInt(currentNumber);
                    }
                    elementQueue.push({element: element, multiplier: multiplier});
                }
            }
            if (stringmethods.is_upper(character)) {
                currentSymbol = character;
            } else {
                // Grab everything in between and put it into an object to parse later.
                var parenthesisCount = 0;
                for (var j = i; j < length && (parenthesisCount != 0 || j == i); j++) {
                    character = compound.substring(j, j + 1);
                    subformula += character;
                    if (character == "(") {
                        parenthesisCount++;
                    } else if (character == ")") {
                        parenthesisCount--;
                    }
                }
                
                if (subformula.startsWith("(")) {
                    subformula = subformula.substring(1, subformula.length);
                }
                if (subformula.endsWith(")") && parenthesisCount == 0) {
                    subformula = subformula.substring(0, subformula.length - 1);
                } else {
                    callback(null, new Error("Error: invalid formula."));
                    return;
                }
                i = j - 1;
            }
            
            currentNumber = "";
        } else if (stringmethods.is_lower(character)) {
            // Make sure the formula is valid.
            if (i == 0) {
                callback(null, new Error("Error: invalid formula."));
                return;
            }
            if (subformula != "") {
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
        } else if (character == " ") {
            // Ignore any spaces.
        } else {
            // Return an error, there is an invalid character in the formula.
            callback(null, new Error("Invalid character in element"));
            return;
        }
    }

    // Make sure there is nothing left.
    if (currentSymbol != "" || currentNumber != "") {
        if (subformula != "") {
            var multiplier = 1;
            if (currentNumber != "") {
                multiplier = parseInt(currentNumber);
            }
            elementQueue.push({subformula: subformula, multiplier: multiplier});
        } else {
            var element = elementCache[currentSymbol];
            if (element == null) {
                element = new Element(currentSymbol);
                elementCache[currentSymbol] = element;
            }
            var multiplier = 1;
            if (currentNumber != "") {
                multiplier = parseInt(currentNumber);
            }
            elementQueue.push({element: element, multiplier: multiplier});
        }
    }

    // Fetch and get the weights.
    var i = 0;
    var weight = 0.0;
    var error = null;
    elementQueue.forEach(function (item) {
        if (error == null) {
            if (item.element != null) {
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
            } else {
                // Handle the subformula by calling ourselves.
                calculateMolarMass(item.subformula, function(subWeight, err) {
                    if (!err) {
                        // Add to the current weight.
                        weight += subWeight * item.multiplier;
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
        }
    });
}

// Export it.
module.exports.calculateMolarMass = calculateMolarMass;