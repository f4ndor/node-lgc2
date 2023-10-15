#!/usr/bin/env node
const setVolume = require("./API/setVolume");
const { parseArgs } = require("./helpers/inputParser");

const args = parseArgs()
const targetVolume = args.volume || 0;

setVolume( targetVolume )
