
// 如何实现一个实例继承多个原型

function Person() {
    this.say = function() {return 'say'}
}

function Animal() {
    this.hawl = function() { return 'animal'}
}

var obj = new Object()

// 这种用法有点叼
// 实例1
Person.call(obj)
Animal.call(obj)

const log = console.log

log(obj.say())
log(obj.hawl())
