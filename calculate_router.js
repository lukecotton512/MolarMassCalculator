// calculate.js
// Luke Cotton
// Calculates the molar mass of a compound.

var express = require("express");

var calculate = require("./calculate.js");

var router = express.Router();

// GET /calculate/ : Calculate molar mass of compound.
router.get("/:compound", function(req, res) {
    var compound = req.params.compound;

    // Our callback.
    var callback = function(weight, err) {
        if (err) {
            res.status(400);
            res.send(err);
        } else {
            res.send({compound: compound, weight: weight});
        }
        res.end();
    }

    // Calculate it and return.
    calculate.calculateMolarMass(compound, callback);
});

// Export it.
module.exports = router;