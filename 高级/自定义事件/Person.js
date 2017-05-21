
const EventTarget = require('./EventTarget')
class Person extends EventTarget {
    constructor(name) {
        super()
        this.name = name
    }
    greeting(message) {
        const event = {
            type: 'greet',
            message: message,
            target: this
        }
        this.fire(event)
    }
}

const testPerson = function() {
    // handler
    const handleGreet = (event) => {
        console.log(event.target.name + ' says ' + event.message)
    }

    // 实例化
    var petter = new Person('petter')
    // 注册
    petter.addHandler('greet', handleGreet)

    //  使用
    petter.greeting("hi")
}


if(require.main === module) {
    testPerson()
}