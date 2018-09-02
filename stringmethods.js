// stringmethods.js
// Luke Cotton
// Some helpful string methods.

// Checks to make sure everything is uppercase.
function is_upper(str) {
    for (var i = 0; i < str.length; i++) {
        var character = str.substring(i, i + 1);
        if (character.search(/[A-Z]/) == -1) {
            return false;
        }
    }
    return true;
}

// Checks to make sure all characters are lowercase.
function is_lower(str) {
    for (var i = 0; i < str.length; i++) {
        var character = str.substring(i, i + 1);
        if (character.search(/[a-z]/) == -1) {
            return false;
        }
    }
    return true;
}

// Checks to see if all characters are numeric.
function is_numeric(str) {
    for (var i = 0; i < str.length; i++) {
        var character = str.substring(i, i + 1);
        if (character.search(/[0-9]/) == -1) {
            return false;
        }
    }
    return true;
}
// Export.
module.exports.is_upper = is_upper;
module.exports.is_lower = is_lower;
module.exports.is_numeric = is_numeric;