
const person = {
    name: 'person',
    greeting() {
        return `hello, ${this.name}`
    }
}

const dog = {
    name: 'student',
    greeting() {
        return `wooff, ${this.name}`
    }
}

// 根据原型，调用同名方法
let friend = {
    name: 'qinghe',
    greeting() {
        // Object.getPrototypeOf 与 .constructor.prototype 的区别 ？
        // 对象字面量的.constructor 是 Object
        // return this.constructor.prototype.greeting.call(this)

        // console.log(Object.getPrototypeOf(this))
        // return Object.getPrototypeOf(this).greeting.call(this)
        return super.greeting()
    }
}
Object.setPrototypeOf(friend, person)
console.log(friend.greeting())

Object.setPrototypeOf(friend, dog)
console.log(friend.greeting())

