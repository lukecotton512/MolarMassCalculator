// stringmethods.js
// Luke Cotton
// Some helpful string methods.

// Checks to make sure everything is uppercase.
export function is_upper(str: string) {
    for (var i = 0; i < str.length; i++) {
        var character = str.substring(i, i + 1);
        if (character.search(/[A-Z]/) == -1) {
            return false;
        }
    }
    return true;
}

// Checks to make sure all characters are lowercase.
export function is_lower(str: string) {
    for (var i = 0; i < str.length; i++) {
        var character = str.substring(i, i + 1);
        if (character.search(/[a-z]/) == -1) {
            return false;
        }
    }
    return true;
}

// Checks to see if all characters are numeric.
export function is_numeric(str: string) {
    for (var i = 0; i < str.length; i++) {
        var character = str.substring(i, i + 1);
        if (character.search(/[0-9]/) == -1) {
            return false;
        }
    }
    return true;
}
