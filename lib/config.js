"use strict";

class Config {

    constructor() {

        this.network = {
            port: process.env.HC_PORT || 3000
        }

    }

    get port() {
        return this.network.port;
    }

    set port(port) {
        this.network.port = port;
    }

}

module.exports = Config;