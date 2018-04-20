// curry 是工具函数，对其他函数进行柯里化，我们把柯里化之后的的函数称为 真实函数
// curry(func) ——> realFunc

// curry 函数第一个参数是要柯里化的函数, 其他参数是要绑定的参数
function curry(fn) {
    // 要绑定的参数
    const args = Array.prototype.slice.call(arguments, 1)
    return function () {
        // 调用 真实函数时传入的参数
        const innerArgs = Array.prototype.slice.call(arguments)
        console.log(innerArgs)
        const finalArgs = args.concat(innerArgs)
        return fn.apply(null, finalArgs)
    }
}

//  func
function add(num1, num2) {
    return num1 + num2
}

// realFunc
const curriedAdd = curry(add, 5)
console.log(curriedAdd(3))
