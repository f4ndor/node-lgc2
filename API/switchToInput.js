#!/usr/bin/env node
const { lgtv } = require('../index.js')
const EventNames = require("../helpers/EventNames");

function switchToInput( input ){
    if( !input ){
        throw new Error('No input specified.')
    }

    const callback = function () {
        const promise = lgtv.switchInput(input);
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

module.exports = switchToInput
