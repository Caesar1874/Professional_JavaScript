
function foo(fn) {
    var a = 'foo'
    fn()
}

// 在函数定义时声明的函数是函数表达式， 即使命名也只是命名函数表达式， 该函数名只在函数内有定义
// 该函数是一个字面量值， 无法通过其他方式引用
// 这个函数的 this 指向 全局对象
var a = 'global'
foo(function bar() {
    console.log('bar', bar, this.a, this)
})


// console.log('bar 2', bar)