const person = {
    name: 'person',
    greeting() {
        return `person, ${this.name}`
    }
}

const student = {
    name: 'student',
    greeting() {
        return `student, ${this.name}`
    }
}

// 根据原型，调用同名方法
let friend = {
    name: 'qinghe',
    greeting() {
        return Object.getPrototypeOf(this).greeting.call(this)
    }
}

// getPrototypeOf 与 .constructor.prototype 的关系


Object.setPrototypeOf(friend, person)
console.log(friend.greeting())

Object.setPrototypeOf(friend, student)
console.log(friend.greeting())