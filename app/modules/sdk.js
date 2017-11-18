"use strict";

const NodeSDK = require("rainbow-node-sdk");
const logger = require('./logger');

const LOG_ID = "STARTER/SDKN - ";

class SDK {
    
    constructor() {
        logger.log("debug", LOG_ID + "constructor()");
    }

    start(bot) {
        // Start the SDK
        this.nodeSDK = new NodeSDK(bot);
        this.nodeSDK.start().then(() => {
            logger.log("debug", LOG_ID + "SDK started");
        });
    }

    restart() {
        return new Promise((resolve, reject) => {
            this.nodeSDK.stop().then(() => {
                logger.log("debug", LOG_ID + "SDK stopped");
                return this.nodeSDK.start();
            }).then(() => {
                logger.log("debug", LOG_ID + "SDK started");
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }
}

module.exports = new SDK();
