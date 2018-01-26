let log = (...args) => console.log.apply(console, args);

// var hoisting: 函数作用域
function getVARValue(condition) {
    log("before declare", value);
    if(condition) {
        var value = "blue";
        log("after declare", value);
    } else {
        log("in the else", value);
        return null;
    }
}
// true or false
// getVARValue(false);

// let
function getLETValue(condition) {
    // Error
    // log("before declare", value)
    if(condition) {
        let value = "red";
        log("after declare", value)
    } else {
        // Error
        // log("in the else", value)
        return null;
    }
    // Error
    // log("outside the block", value)
}
// true or false
// getLETValue(true);

// var 可以重复声明一个变量
var version = "0.0.1";
var version = "0.0.2";
log("repeat var declare", version);

// let 不能重复声明
let name = "qinghe";
// Error
// let name = "Caesar";
log("repeat let declare", name);

// 先let声明，后var声明也不行
let height = "caesar";
// Error var会提升，所以为什么不是在let处保存
// var height = "qinghe";

// 先var声明， 后let声明也不行
var job = "doctor";
// Error
// let job = "doctor";

// const

// const 声明同时必粗初始化
const age = 18;
// Error
// const weight;

// 初始化后不能赋值
// Error
// age = 19;

// const 声明的对象
// const 进制禁止修改标识符与值之间的绑定，而不是禁止修改值本身；
const person = {
    name: "qinghe"
}
// works
person.age = "18";
// Error
/*person = {
    name: "Greg"
}*/

// 暂时性死区
// typeof不再安全
if(true) {
    // Error
    // log(typeof value);
    let value = "blue";
}
// 暂时性死区的边界
log(typeof student);
// undefined
if(true) {
    let dog = "pug";
}

// 循环
//

// 计数变量在循环外仍然是可访问的
for(var i = 0; i < 10; i++) {
    i;
}
log(i);

// 计数器声明的位置；
// j实际上在此处声明
for( var j = 0; j < 10; j++) {
    log(j);
    var j = "dsfj";
    log(j);
}

// let
for(let index = 0; index < 10; index++) {
    index;
}
// Error
// log(index);

// var 变量提升 与 函数
var funcs = [];
for( var k = 0; k < 10; k++) {
    funcs.push(function() {
        console.log(k);
    })
}
funcs.forEach(function(func) {
    func();
})
// 10 * 10

// 立即调用函数表达式
var funcs2 = [];
for( var n = 0; n < 10; n++) {
    funcs2.push(
        (function(value) {
            return function() {
                log(value);
            }
        }(n))
    );
}
funcs2.forEach(function(func) {
    func();
})
// 1 ~ 9

// 使用 let
// let 和 const 在循环中的特殊行为与不进行声明提升是无关的
// 因为即便声明的是块级作用域中的局部变量，也不能解释 1 ~ 9
// 真正的原因是每次迭代都声明一个新变量
var funcs = [];
for(let i = 0; i < 10; i++) {
    funcs.push(function() {
        log(i);
    })
}
funcs.forEach(function(func) {
    func();
})
// 1 ~ 9

// let 也适用于for in 和 for of
var funcs = [];
var obj = {
    name: "qinghe",
    age: 18,
    job: "doctor"
}
// var
for(var key in obj ) {
    funcs.push(function() {
        log(key);
    })
}

funcs.forEach(function(func) {
    func();
})
// job * 3

for( let key in obj) {
    funcs.push(function() {
        log(key);
    })
}
funcs.forEach(function(func) {
    func();
})
// name age job

// const 与循环

// for 循环
// 在进行第二次迭代时报错
/*
for(const i = 0; i < 10; i++) {
    log("const", i);
}
*/
// for in
for(const key in obj) {
    log("const", key);
}
// 不能尝试修改key
for(const key in obj) {
    // Error
    // key = "q";
    log("const", key);
}

// 在 for in 和 for of 中每次循环都会创建新的绑定而不是修改原来的绑定；

// 全局变量
// let const 声明的全局变量不是全局对象的属性

// var 声明的变量时全局对象的属性
// 涉及window的代码要在浏览器中测试
var  cat = "miao";
// console.log("window", window.cat);

// 使用 var 会重写window对象上的属性
// console.log(window.self);
var self = "lalla";
// console.log(window.self);

// let const 声明的全局变量不是全局对象的属性
// 所以不会重写window的属性，只是会屏蔽
// let self = "qinghe";
console.log(self);
// console.log(window.self);

// 最佳实践： 默认使用const, 在确定变量的值会发生变化时使用let

function tmp(condition) {
    if(condition) {
        var x = 3;
        console.log(x);
    } else {
        var y = 4;
        console.log(y);
    }
    console.log(x);
    console.log(y);
}
tmp(true);


