// calculate.js
// Luke Cotton
// Calculates the molar mass of a compound.

var express = require("express");

var calculate = require("./calculate.js");

var router = express.Router();

// GET /calculate/ : Calculate molar mass of compound.
router.get("/:compound", async function(req, res) {
    var compound = req.params.compound;
    
    var reqType = req.query.reqType;
    
    // Calculate it and return.
    var weight;
    try {
        weight = await calculate.calculateMolarMass(compound);
    } catch (e) {
        res.status(400);
        if (reqType == "jsonp") {
            res.jsonp({message: e.message});
        } else {
            res.json({message: e.message});
        }
        
        res.end();
        return;
    }
    
    // Send the response.
    var data = {compound: compound, weight: weight}
    if (reqType == "jsonp") {
        res.jsonp(data);
    } else {
        res.json(data);
    }

    res.end();
});

// Export it.
module.exports = router;