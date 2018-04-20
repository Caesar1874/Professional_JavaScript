const log = console.log

function Person (name, age) {
    this.name = name
    this.age = age
}

// 当不使用 new 调用构造函数是, Person 作为普通函数 this 执行 window, 实际上创建了多个全局变量
Person('qig', 16)

log('window', window.name, window.age)