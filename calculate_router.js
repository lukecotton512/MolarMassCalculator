// calculate.js
// Luke Cotton
// Calculates the molar mass of a compound.

var express = require("express");

var calculate = require("./calculate.js");

var router = express.Router();

// GET /calculate/ : Calculate molar mass of compound.
router.get("/:compound", function(req, res) {
    var compound = req.params.compound;

    var reqType = req.query.reqType;

    // Our callback.
    var callback = function(weight, err) {
        if (err) {
            res.status(400);
            if (reqType == "jsonp") {
                res.jsonp(err.message);
            } else {
                res.json(err.message);
            }
        } else {
            var data = {compound: compound, weight: weight}
            if (reqType = "jsonp") {
                res.jsonp(data);
            } else {
                res.json(data);
            }
        }
        res.end();
    }

    // Calculate it and return.
    calculate.calculateMolarMass(compound, callback);
});

// Export it.
module.exports = router;