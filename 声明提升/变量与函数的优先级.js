const log = console.log
// 无论函数声明与变量声明的先后顺序如何, 总是函数声明覆盖变量声明, 说明声明提升中 function 的优先级高于 var
// 函数声明会覆盖同名变量, 变量声明不会覆盖已存在的变量, 实际上先处理函数, 后处理变量
// 函数声明只在代码预编译阶段其作用, 在执行阶段直接被忽略, 所以在只执行变量赋值之后变量的值就不变了
const test1 = function () {
    log('1: ', foo)

    var foo = 1

    log('2', foo)

    function foo () {}

    log('3', foo)
}

const test2 = function () {
    log('1: ', foo)

    function foo () {}

    log('2', foo)

    var foo = 1
    
    log('3', foo)
}

test1()

test2()

