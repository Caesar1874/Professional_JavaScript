const log = console.log

function bind (fn, context) {
    const outArgs = Array.prototype.slice.call(arguments, 2)
    return function () {
        const innerArgs = Array.prototype.slice.call(arguments)
        const finalArgs = outArgs.concat(innerArgs)
        fn.apply(context, finalArgs)
    }
}

const person1 = {
    name: 'qinghe',
    sayName (greet) {
        log(greet, this.name)
    }
}

const person2 = {
    name: 'caesar',
}

// 绑定并柯里化
person2.sayName = bind(person1.sayName, person2, '日安')

person2.sayName()