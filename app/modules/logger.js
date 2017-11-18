"use strict";

const winston = require("winston");
const LOG_ID = "STARTER/LOGS - ";

const tsFormat = () => {
    
        let date = new Date();
    
        return date.toLocaleDateString() + " " + date.toLocaleTimeString() + " [" + date.valueOf() + "]";
    };

class Logger {

    constructor() {

        this._logger = new (winston.Logger)({
            transports: [
                new (winston.transports.Console)({ 
                    colorize: true, 
                    timestamp: tsFormat, 
                    level: "debug" 
                })
            ]
        });

        this._logger.log("debug", LOG_ID + "-------------------------");
        this._logger.log("debug", LOG_ID + "BOT STARTER-KIT");
        this._logger.log("debug", LOG_ID + "constructor()");
    }

    log(level, message) {
        this._logger.log(level, message);
    }

}

module.exports = new Logger();