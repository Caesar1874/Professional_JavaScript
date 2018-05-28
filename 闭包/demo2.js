// test1 vs test3: 闭包 参数按值传递
// test1 vs test2: 局部变量

const test1 = function () {
    const arr = []
    for (var i = 0; i < 6; i++) {
        arr[i] = function () {
            console.log(i)
        }
    }
    arr[0]()
    arr[5]()
}

const test2 = function () {
    const arr = []
    for (let i = 0; i < 6; i++) {
        arr[i] = function () {
            console.log(i)
        }
    }
    arr[0]()
    arr[5]()
}

const test3 = function () {
    const arr = []
    for (let i = 0; i < 6; i++) {
        arr[i] = (function (n) {
            return function () {
                console.log(n)
            }
        })(i)
    }
    arr[0]()
    arr[5]()
}

test1()

test2()

test3()