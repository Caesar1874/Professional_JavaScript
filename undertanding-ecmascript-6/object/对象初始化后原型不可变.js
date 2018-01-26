
const Foo = function () {

}

Foo.prototype.say = () => {
    console.log('hello')
}

// 初始化
const foo = new Foo()

// 改变原型
Foo.prototype = {
    say() {
        console.log('woorld')
    }
}

// 实例仍然使用原来的原型
// hello
foo.say()

