const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')


module.exports.parseArgs = ()=>{
//    console.warn({ argv: yargs(hideBin(process.argv)).argv });
    return yargs(hideBin(process.argv)).argv || {}
}
