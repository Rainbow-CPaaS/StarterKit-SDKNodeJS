"use strict";
const express = require('express');
const router = express.Router();
let fs = require('fs');
const http = require('http');
const https = require('https');
const app = express();
const cors = require('cors');

const logger = require('./logger');

const LOG_ID = "STARTER/ROUT - ";

class Router {

    constructor() {
        logger.log("debug", LOG_ID + "constructor()");
        this.protocol = "http";
        this.port = 8888;
        this.sdk = null;
    }

    start(argv, config, sdk) {

        this.protocol = config.protocol;
        this.port = config.port;
        this.sdk = sdk;

        if(argv.length === 4) {
            this.protocol = argv[2];
            this.port = argv[3];
            logger.log("info", LOG_ID + "serving " + this.protocol + " requests on port " + this.port + " (forced by CLI)");
        } else {
            logger.log("info", LOG_ID + "serving " + this.protocol + " requests on port " + this.port);
        }

        let key = fs.readFileSync(__dirname + "/../../" + config.certificates.key);
        let cert = fs.readFileSync(__dirname + "/../../" + config.certificates.cert);
        let https_options = { key: key, cert: cert };
        
        if(this.protocol === "https") {
            https.createServer(https_options, app).listen(this.port, () => {
                logger.log("info", LOG_ID + 'server started');
            });
        }
        else {
            http.createServer(app).listen(this.port, () => {
                logger.log("info", LOG_ID + 'server started');
            });
        }

        app.use(cors());

        this.defineRoute();

        // Define default route to bot
        app.use("/botsample", router);
    }

    defineRoute() {

        // Check bot health
        router.get('/ping', (req, res) => {
            logger.log("debug", LOG_ID + "rest ping");
            res.status(200).send({"code": 0});
        });

        // Restart SDK if needed
        router.post('/restartsdk', (req, res) => {
            logger.log("debug", LOG_ID + "rest restart sdk");
            this.sdk.restart().then(() => {
                res.status(200).send({"code": 0, "message": "sdk restarted"});
            }).catch((err) => {
                res.status(500).send({"code": -1, "message": "Error when restarting the SDK", "error": err});
            });
        });

        /**
         * TO DO
         * Add more route to your bot if needed
         */

    }

}

module.exports = new Router();


