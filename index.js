"use strict";

// Load the SDK for Node.JS
const sdk       = require('./app/modules/sdk');
const logger    = require('./app/modules/logger');
const router    = require('./app/modules/router');

// Load configuration
const defaultServer = require("./app/config/router.json");

const json = require('comment-json');
const fs = require('fs');
const botfile = fs.readFileSync("./app/config/bot.json");
let txt = botfile.toString();
let bot = json.parse(txt);

json.stringify(bot, null, 2);

const LOG_ID = "STARTER/INDX - ";

// Start the SDK
sdk.start(bot, process.argv).then(() => {
    // Start the router
    return router.start(process.argv, defaultServer, sdk);
}).then(() => {
    logger.log("debug", LOG_ID + "starter-kit initialized");
});
