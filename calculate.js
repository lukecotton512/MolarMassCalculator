// calculate.js
// Luke Cotton
// Calculation methods.

// Imports
var Element = require("./element.js");

var stringmethods = require("./stringmethods.js");

// Function to parse and calculate our molar mass.
async function calculateMolarMass(compound) {
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
                    throw new Error("Invalid formula.");
                }
                i = j - 1;
            }
            
            currentNumber = "";
        } else if (stringmethods.is_lower(character)) {
            // Make sure the formula is valid.
            if (i == 0) {
                throw new Error("Invalid formula.")
            }
            if (subformula != "") {
                throw new Error("Invalid formula.");
            }
            // Append the character and move on.
            currentSymbol += character;
        } else if (stringmethods.is_numeric(character)) {
            // Make sure the formula is valid.
            if (i == 0) {
                throw new Error("Invalid formula.")
            }
            // Append the number and move on.
            currentNumber += character;
        } else if (character == " ") {
            // Ignore any spaces.
        } else {
            // Return an error, there is an invalid character in the formula.
            throw new Error("Invalid character in element.");
        }
    }

    // Make sure there is nothing left.
    if (currentSymbol != "" || currentNumber != "" || subformula != "") {
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
    var weight = 0.0;

    for (var index in elementQueue) {
        var item = elementQueue[index];

        if (item.element != null) {
            try {
                await item.element.fetchElement();
            } catch (e) {
                throw e;
            }

            // Add to the current weight.
            weight += item.element.weight * item.multiplier;
        } else {
            // Handle the subformula by calling ourselves.
            var subWeight;

            try {
                subWeight = await calculateMolarMass(item.subformula);
            } catch (e) {
                throw e;
            }
            
            // Add to the current weight.
            weight += subWeight * item.multiplier;;
        }
    }

    return weight;
}

// Export it.
module.exports.calculateMolarMass = calculateMolarMass;