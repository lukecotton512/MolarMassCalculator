// element.js
// Luke Cotton
// Gets element objects.

// Imports
import { openConn } from "./conn";

// SQL.
const selectSQL = 
    "SELECT * " +
    "FROM elements ";

const lookupSQL =
    selectSQL + "WHERE element_symbol = $1";

// Constructor.
export default class Element {
    symbol: string;
    name?: string;
    weight?: number;
    isFetched: boolean;

    constructor(symbol: string, name?: string, weight?: number) {
        this.symbol = symbol;
        this.name = name;
        this.weight = weight;
        this.isFetched = false;
    }

    // Fetches an element using Postgres.
    async fetchElement() {
        // If we are fetched, then call the callback.
        if (this.isFetched) {
            return;
        }

        // Our object.
        var element = this;
        // Open a connection.
        var dbconn = openConn();

        dbconn.connect();

        var results;
        try {
            results = await dbconn.query(lookupSQL, [this.symbol]);
        } catch (e) {
            await dbconn.end();
        }

        // Make sure we have an element.
        if (results) {
            if (results.rowCount == 0) {
                await dbconn.end();
                return;
            }
    
            // Get result.
            let result = results.rows[0];
    
            // Retrieve element fields and fill our object.
            element.symbol = result.element_symbol;
            element.name = result.element_name;
            element.weight = result.weight;
    
            // Close the connection.
            await dbconn.end();
        }
    }
}
