const log = console.log

function bind(fn, context) {
    return function() {
        return fn.apply(context, arguments)
    }
}

const person1 = {
    name: 'qinghe',
    sayName: function() {
        log(this.name)
    }
}


const person2 = {
    name: 'caesar',
}

// 执行环境是动态的
person2.sayName = person1.sayName
person1.sayName()
person2.sayName()

// 绑定执行环境
person2.sayName = bind(person1.sayName, person1)
person2.sayName()


