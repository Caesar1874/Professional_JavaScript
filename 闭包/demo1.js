// 在浏览器中进行测试

// test1: 输出顺序和输出结果

// test2: 输出顺序, 输出结果, 为什么报错后还可以输出 -> 事件循环
// 为什么 let 的结果与 var 不同: let 是局部变量

const test1 = function () {
    for (var i = 0; i < 6; i++) {
        setTimeout(function () {
            console.log(i)
        }, 1000)
    }
    
    console.log(i)
}

const test2 = function () {
    for (let i = 0; i < 6; i++) {
        setTimeout(function () {
            console.log(i)
        }, 1000)
    }
    
    console.log(i)
}

test1()

test2()