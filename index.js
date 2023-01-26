const LgTvController = require("./helpers/LGTVController");
const config = require("./config");
const Events = require("events");

const instance = new LgTvController(config.ip, config.mac, config.name, config.keyFile, config.broadcastAdr, config.alivePollingInterval);

module.exports.lgtv = instance
