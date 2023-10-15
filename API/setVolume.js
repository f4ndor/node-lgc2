#!/usr/bin/env node
const { lgtv } = require('../index.js')
const EventNames = require("../helpers/EventNames.js");

function setVolume( volume = 0 ){

    const callback = function () {
        const promise = lgtv.setVolumeLevel(volume);
        try {
            promise.then(()=>{
                lgtv.disconnect();
                process.exit()
            })
        } catch (err) {
            lgtv.disconnect();
            process.exit()
        }
    }

    lgtv.on(EventNames.TV_CONNECTED, callback);

    lgtv.connect({ callback })
}

module.exports = setVolume
