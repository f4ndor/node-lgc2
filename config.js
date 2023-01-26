const path = require("path");

const config = {
    ip: '192.168.1.110',
    mac: 'AC:5A:F0:D7:FA:96',
    name: 'LG C2',
    keyFile: '',
    broadcastAdr: '255.255.255.255',
    alivePollingInterval: 5000,
    log: console
}

config.keyFile = path.join( __dirname, 'keyFile_' + config.ip.split('.').join('') + '_' + config.mac.split(':').join('') + '.key');


module.exports = config
