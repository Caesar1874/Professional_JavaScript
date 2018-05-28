const log = console.log

// 原型: __proto__, Foo.prototype, f.constructor.prototype 之间的关系
// 默认原型 {constructor, __proto__}
// 结论:
// 1.  Foo.prototype 属性是指向原型的指针
// 2. 实例的 __proto__ 属性是 Foo.prototype 属性的副本, 两者指向同一个原型
// 3. Foo.prototype 总是指向当前类的原型, f.constructor.prototype 默认也指向原型, 但可能通过 constructor 属性被修改

const test1 = function () {
    // 构造函数
    function Foo () {
    
    }
    // 实例
    const f = new Foo()
    
    // 原型
    log('继承之前')
    log('__proto__', f.__proto__,  )
    log('prototype', Foo.prototype,)
    log('constructor.prototype == F.prototype', f.constructor.prototype === Foo.prototype)
    log('__proto__ === prototype', f.__proto__ === Foo.prototype)
    
    function Base () {
        this.name = 'qinghe'
    }
    
    f.constructor = Base
    
    log('修改实例的原型')
    log('__proto__', f.__proto__) // 不变
    log('prototype', Foo.prototype) // 不变
    log('constructor.prototype == F.prototype', f.constructor.prototype === Foo.prototype) // false
    log('__proto__ === prototype', f.__proto__ === Foo.prototype) // true
}

test1()



