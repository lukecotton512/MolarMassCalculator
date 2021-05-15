// calculate.js
// Luke Cotton
// Calculates the molar mass of a compound.

import express from "express";

import { calculateMolarMass } from "./calculate";

export let calculate_router = express.Router();

// GET /calculate/ : Calculate molar mass of compound.
calculate_router.get("/:compound", async function(req, res) {
    var compound = req.params.compound;
    
    var reqType = req.query.reqType;
    
    // Calculate it and return.
    var weight;
    try {
        weight = await calculateMolarMass(compound);
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
