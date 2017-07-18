const log = (function (){
    return console.log.bind(console);
})()

module.exports = log;

const test = (name, callback) => {
    const testResult = callback
    const testText = testResult ? '通过' : '失败'
    console.log(`${name} - ${time} - `)
}