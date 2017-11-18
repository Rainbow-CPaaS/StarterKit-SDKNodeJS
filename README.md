# Starter-Kit Rainbow SDK for Node.JS

Welcome to the Alcatel-Lucent Enterprise **Starter-Kit Rainbow SDK for Node.JS**!

The Alcatel-Lucent Enterprise (ALE) Starter-Kit Rainbow SDK for Node.JS is a basic sample for starting you development using the SDK for Node.JS in an easy way but within an advanced environment.


## Preamble

You need a Node.JS LTS release installed on your computer.

You need a Rainbow account. Connect to the [Rainbow HUB](https://hub.openrainbow.com) to get your developer account.


## Installation

Clone this repository in the directory you want and then open a shell and executes the following command

```bash

$ npm install

```

## Content

This Starter-Kit is a Node.JS application that:

- Starts the SDK for Node.JS and connect it to Rainbow

- Starts a web server for monitoring your application


## Setup

In order to setup your application, you have to configure 2 JSON files:

- `app/config/bot.json`: This file contains your SDK for Node.JS parameter. Modify it with your Rainbow account.

- `app/config/router.json`: This file contains the default parameter for the embedded web server.

Once you have configured these two files, you can start the application by launching the following command:

```bash

$ node index.js

```

## Server API

Your Node.JS contains an embedded server with 3 default routes:

- `GET botsample/ping`: API for having an health check of your application

- `POST botsample/sdk/restart`: API for restarting the SDK for Node.JS (stop and start).

- `GET botsample/sdk/status`: API for having a status of the SDK for Node.JS

You can test these routes using CURL. Here is an example of testing the `botsample/ping` route when the Web Server is launched using `HTTP` and port `3002`:

```bash

$ curl -X GET http://localhost:3002/botsample/ping
> {"code":0}

```

Note: When testing in HTTPS, default self-signed certificates are proposed. For testing with CURL, you have to add the parameter `-k` to avoid the CURL's verification like as follows (launched with `HTTPS` and port `3003`):

```bash
$ curl -X GET https://localhost:3003/botsample/ping -k
> {"code":0}

```

## Environment

### ESLint

Basic rules for Node.JS JavaScript development have been added.

### Unit Tests

Tests have to be added in directory `test`.

to launch the test, open a sheel and execute the following command:

```bash

$ npm test

```

Each time a file is modified, the tests are executed.

If you want to check the code coverage, launch the following command:

```bash

$ npm run coverage

```

### Modules

New modules can be added to your application in directory `app`.


