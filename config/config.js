// config.js
// Luke Cotton
// Our config singleton object.

// Imports.
var fs = require("fs");

// Default config.
var _defaultConfig = null;

// Constructor.
var Config = function(configfile) {
    // Load the config file synchronously.
    // This function should only be called at startup.
    var fileContents = fs.readFileSync(configfile);
    var configObject = JSON.parse(fileContents);

    // Load the appropriate parameters in.
    this.dbhostname = configObject.dbhostname;
    this.dbport = configObject.dbport;
    this.dbuser = configObject.dbuser;
    this.dbpassword = configObject.dbpassword;
    this.dbdatabase = configObject.dbdatabase;
    this.httpport = configObject.httpport || 3001;
};

// Get the default config.
Config.defaultConfig = function() {
    if (_defaultConfig == null) {
        _defaultConfig = new Config("./config/etc/config.json");
    }

    return _defaultConfig;
};

// Export it.
module.exports = Config;