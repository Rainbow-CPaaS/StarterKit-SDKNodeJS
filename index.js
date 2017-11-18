"use strict";

// Load the SDK for Node.JS

const sdk       = require('./app/modules/sdk');
const logger    = require('./app/modules/logger');
const router    = require('./app/modules/router');

// Load configuration
const bot = require("./app/config/bot.json");
const defaultServer = require("./app/config/router.json");

const LOG_ID = "STARTER/INDX - ";

// Initialize the SDK
sdk.start(bot);

// Start the application
router.start(process.argv, defaultServer, sdk);

logger.log("debug", LOG_ID + "starter-kit initialized");
