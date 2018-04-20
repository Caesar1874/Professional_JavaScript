// bind 的功能是绑定执行环境, 同时柯里化(传入第二个参数)
// call 和 apply 的功能只是绑定执行环境,  甚至说不上是绑定, 只是调用时改变执行

function add (num1, num2) {
    return num1 + num2
}

const curriedAdd = add.bind(this, 23)
console.log(curriedAdd(24))