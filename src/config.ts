// config.js
// Luke Cotton
// Our config singleton object.

// Imports.
import fs from "fs";

// Config object.
export default class Config implements ConfigInterface {
    private static _defaultConfig?: Config;

    dbhostname: string;
    dbport: number;
    dbuser: string;
    dbpassword: string;
    dbdatabase: string;
    httpport: number = 3001;
    listen_address: string = "127.0.0.1";

    constructor(configfile: string) {
        // Load the config file synchronously.
        // This function should only be called at startup.
        var fileContents = fs.readFileSync(configfile);
        var configObject: ConfigInterface = JSON.parse(fileContents.toString());

        // Load the appropriate parameters in.
        this.dbhostname = configObject.dbhostname;
        this.dbport = configObject.dbport;
        this.dbuser = configObject.dbuser;
        this.dbpassword = configObject.dbpassword;
        this.dbdatabase = configObject.dbdatabase;
        this.httpport = configObject.httpport || 3001;
        this.listen_address = configObject.listen_address || "127.0.0.1";
    }
    // Get the default config.
    static defaultConfig(configfile: string = "./config/etc/config.json"): Config {
        if (Config._defaultConfig == null) {
            Config._defaultConfig = new Config(configfile);
        }

        return Config._defaultConfig;
    }
}

// Config object interface.
interface ConfigInterface {
    dbhostname: string;
    dbport: number;
    dbuser: string;
    dbpassword: string;
    dbdatabase: string;
    httpport: number;
    listen_address: string;
}