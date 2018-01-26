
class Foo {
    // staticProp = 'uabi'
    constructor () {
        this.foo = 'foo'
        this.fooSay = 'jsdkfj'
    }
    fooSay() {
        return this.foo
    }
    
    static fooStatic() {
        return this.foo
    }
}

class Bar extends Foo {
    constructor () {
        super()
        this.bar = 'bar'
    }
    
    fooSay() {
        return this.bar
    }
    
    static barStatic() {
        return this.bar
    }
}

const b = new Bar()
const log = console.log
log('b.bar', b.bar)
// log('b.barSay()', b.barSay())

log('b.foo', b.foo)
log('b.fooSay', b.fooSay)
log('b.barStatic()', b.barStatic)
log('b.fooStatic()', b.fooStatic)

// constructor 中的指定的属性定义在实例上
// static methond 定义在构造函数上, 也就是类上
    // 静态方法可继承
// class methond 定义在 className.prototype 上
// static prop 是定义在哪里的 ？
// 为什么静态属性继承之后相当于实例属性