
// 使用闭包实现每隔5s输出0~9b之间的十个数字

/*(function out() {
    var i = 0;
    setTimeout(function() {
        console.log(i);
        i++;
        if(i < 10) {
            setTimeout(arguments.callee, 5000);
        }
    }, 5000)
})()*/

// setTimeout 中延迟执行函数中的 this 始终指向window;

// test 1
var name = "global";
setTimeout(function() {
    var name = "local";
    console.log(this.name);
}, 1000)
// global

//test 2
// 全局函数
function bark() {
    console.log(this);
    console.log("global: 汪汪汪");
}
// 构造函数
function Dog() {
    // 实例方法
    this.bark = function() {
        console.log(this);
        console.log("instance: 汪汪汪")
    }
    // 此处 this 指向实例
    // 但是 this.bark方法 中的 this 指向window, 即Dog()函数的执行环境
    setTimeout(this.bark, 500);

}
new Dog();
// window, instance: 汪汪汪

// test 3
// 全局函数
function bark() {
    console.log(this);
    console.log("global: 汪汪汪");
}
// 构造函数
function Dog() {
    // 实例方法
    this.bark = function() {
        console.log(this);
        console.log("instance: 汪汪汪")
    }
    // 此处调用的是全局函数 bark， 因为this.bark 声明的方法属于实例，并不在 Dog 函数的作用域链上
    setTimeout(bark, 500);

}
new Dog()
// window, global: 汪汪汪

// 将 Dog()作为函数调用
Dog()
// window, instance: 汪汪汪
// Dog 中的this指向全局对象，覆盖了全局的bark函数；
