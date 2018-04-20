// 柯里化演示 demo 严格来说 curriedAdd 并非是柯里化函数
function add(num1, num2) {
    return num1 + num2
}

function curriedAdd(num2) {
    return add(5, num2)
}

console.log(curriedAdd(3))