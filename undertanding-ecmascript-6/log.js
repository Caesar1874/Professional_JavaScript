
const log = (() => {
    return console.log.bind(console)
})()

if(require.main === module) {
    log('hello world')
}


module.exports = log