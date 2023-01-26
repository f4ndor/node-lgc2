#!/usr/bin/env node
const switchToInput = require("./API/switchToInput");
const { parseArgs } = require("./helpers/inputParser");

const args = parseArgs()
const targetId = args.input || 'HDMI_1'

switchToInput( targetId )
