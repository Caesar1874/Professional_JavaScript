const log = console.log

// 原型的动态性
// 默认原型 {constructor, __proto__}
// 结论
// 1. 原型的动态是指属性, 而不是改变原型

const test1 = function () {
    // 构造函数
    function Foo () {
    
    }
    // 实例
    const f = new Foo()
    // 此时 f 的原型是默认原型, 没有 name 属性
    // 此时的原型
    log('继承之前')
    log('__proto__', f.__proto__)
    log('prototype', Foo.prototype,)
    log('__proto__ === prototype', f.__proto__ === Foo.prototype)
    
    function Base () {
        this.name = 'qinghe'
    }
    
    Foo.prototype = new Base()
    
    const f2 = new Foo()
    
    log('继承之后')
    log('__proto__', f.__proto__) // 不变
    log('新实例', f2.__proto__) // 新原型
    log('prototype', Foo.prototype,) // 新原型
    log('__proto__ === prototype', f.__proto__ === Foo.prototype) // false
}

test1()



