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

Your Node.JS contains an embedded server with 2 default routes:

- `GET botsample/ping`: This API allows to monitor your Node.JS application

- `POST botsample/restart`: This API allows to restart the SDK for Node.JS (stop and start).


## Environment

### ESLint

Todo

### Unit Tests

Todo


