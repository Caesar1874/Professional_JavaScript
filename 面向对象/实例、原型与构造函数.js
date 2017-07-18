// 构造函数
const Person = function() {
    this.name = 'person'
    this.sayHi = function() {
        console.log(this.name, ' hi')
    }
}

// 实例
const qinghe = new Person()
qinghe.sayHi()

// 原型
const proto = Person.prototype
console.log(proto)
// {constructor: function}
// 通过构造函数创建的实例的原型是一个只有 construcor 属性的对象

// 该原型的原型 是 Object.prototype
console.log(proto.__proto__)
// {__defineGetter__: function, __defineSetter__: function, hasOwnProperty: function, __lookupGetter__: function, __lookupSetter__: function…}

// Object.prototype 的原型是 null
console.log(Object.prototype.__proto__)
// null


// 原型的 constructor 属性 指向构造函数
console.log(Person.prototype.constructor)
// 实例继承了 原型的 constructor 属性
console.log(qinghe.constructor)


// getPrototypeOf
console.log('getPrototypeof 返回实例的[[prototype]]属性', Object.getPrototypeOf(qinghe) === qinghe.__proto__)
console.log('__proto__就是构造函数的prototype属性', qinghe.__proto__ === proto)
