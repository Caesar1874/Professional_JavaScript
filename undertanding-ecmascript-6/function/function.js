let log = (...args) => console.log.apply(console, args);

// 默认参数
// es5 默认参数
function makeRequest(url, timeout, callback) {
    // 进行类型检查以防止传入的参数假值，而被默认参数覆盖
    timeout = (typeof timeout !== "undefined" ? timeout : 2000);
    callback = (typeof callback !== "undefined") ? callback : function() {};
    //
}

// es6 默认参数
function makeRequest(url, timeout = 2000, callback = function() {}) {
    //
}

// 默认参数可以在无默认值的参数前
function makeRequest(url, timeout = 2000, callback) {
    //
}
// 以下两种调用方式将使用默认值
makeRequest("/repos");
// 显式的传入undefined, 其他假值不行
makeRequest("/repos", undefined, function() {});

// arguments 对象
// es5 非严格模式 arguments 实时反映命名参数
function mixArgs(one, two) {
    log(arguments[0] === one);
    log(arguments[1] === two);
    one = "c";
    two = "d";
    log(arguments[0] === one);
    log(arguments[1] === two);
}
mixArgs("a", "b");

// es5 严格模式 arguments 不会实时更新
function mixArgs(one, two) {
    "use strict"
    log(arguments[0] === one);
    log(arguments[1] === two);
    one = "c";
    two = "d";
    log(arguments[0]);
    log(arguments[1]);
}
mixArgs("a", "b");

// 使用 默认参数之后，即使在非严格模式下，arguments也不再实时更新
function mixArgs(one, two = "b") {
    // 实际传入的参数个数，不包括默认参数
    log(arguments.length);
    log(arguments[0] === one);
    // false, arguments[1] 是 undefined
    log(arguments[1] === two);
    one = "c";
    two = "d";
    log(arguments[0]);
    log(arguments[1]);
}
mixArgs("a");

// 默认参数可以是js表达式

// 函数调用作为默认参数
//  函数只在需要默认参数时调用
function getValue() {
    return 5;
}
function add(first, second = getValue()) {
    return first + second;
}
console.log(add(1))
// 6

// 引用其他参数作为默认参数
function plus(first, second = first) {
    return first + second;
}
console.log(plus(5));

// 引用参数只能引用前面的参数，不能相反
// 解释见默认参数的暂时性死区
function subtract(first = second, second) {
    return first - second;
}
// Error
// subtract(undefined, 1);

// 默认参数的暂时性死区
// 参数创建新的标识符绑定，在初始化之前不能引用
// 如下所示
// let first = second;
let second = 1;
// 函数参数的作用域和TDZ 与函数体的作用域是不同的, 所以默认参数不能引用函数体内声明的变量


// 结合 引用参数 和 函数调用
function getValue(value) {
    return value + 5;
}
function add(first, second = getValue(first)) {
    return first + second;
}
console.log(add(0));

// 未命名参数

// es5 未命名参数示例
/*复制对象中的指定属性
*   第一个参数指定 对象
*   第二个参数指定 要复制的属性
*/
function pick(object) {
    let result = Object.create(null);
    // 从第二个参数开始
    for(let i = 1; i < arguments.length; i++) {
        result[arguments[i]] = object[arguments[i]];
    }
    return result;
}

let book = {
    "title": "ecmascript 6",
    "author": "Nicholas",
    "year": 2015
}

let bookData = pick(book, "author", "year");
console.log(bookData);
// { author: 'Nicholas', year: 2015 }

// Rest参数
// ... 标识的命名参数变成数组，包含所有未命名参数
function pick(object, ...keys) {
    let result = Object.create(null);
    for(let i = 0; i < keys.length; i++) {
        result[keys[i]] = object[keys[i]];
    }
    return result;
}

// rest 参数只能有一个，且只能在最后
// Error
/*
function person(name, ...description, address) {
    console.log(name);
}
person("qinghe", "18", "male", "qingdao");
*/

// rest 参数不能用于对象的setter方法, setter只能有一个参数
// Error
/*
let obj = {
    set desc(...value) {
        console.log("setter");
    }
}
obj.desc("qinghe", 18, "male");*/

// rest参数 与 arguments对象
// arguments 总是反映实际传入的参数个数，不受rest影响
function checkArgs(...args) {
    console.log(args.length); // 2
    console.log(arguments.length); // 2
    console.log(args[0], arguments[0]);
    console.log(args[0], arguments[1]);
}
checkArgs("a", "b");

// 扩展参数
// rest参数将 多个函数参数 聚合为数组
// 扩展参数 将 数组参数展开 为多个参数
let val = [25, 50, 75, 100];
console.log(Math.max(...val));

// 混合使用 扩展参数 和 其他参数
console.log(Math.max(...[-25, -50, -35], 0));

// 函数的name属性
function doSomething() {
    //
}
let doAnotherThing = function() {
    //
}
let doWeirdThing = function Weird() {
    //
}
console.log(doSomething.name);
console.log(doAnotherThing.name);
console.log(doWeirdThing.name);

// 箭头函数
/*
*   没有this, arguments
*   不能通过 new 调用， 没有 prototype
*   */

// 只有一个参数省略 ()
const reflect = val => val;
console.log("arrow", reflect(123));

// 传递多个参数必须使用()
const sum = (num1, num2) => num1 + num2;
console.log(sum(1, 1));

// 无参数，必须使用空 ()
const sayHi = () => "hi";
console.log(sayHi());

// 函数体只有一条语句，可以省略 {} 以及return, 默认返回该语句的值
const smallBang = (val) => val * 2;
console.log(smallBang(2));

// 函数体多于一个语句时使用 {}, 并使用return
const bigBang = (val) => {
    val++;
    return val;
}
console.log(bigBang(1));

// 函数直接返回对象字面量时必须使用()
const getID = (id) => ({id: id, name: "temp"});
console.log(getID("13"));

// 箭头函数的this
// 箭头函数没有绑定this, 所以会在作用域链上查找
let arrowFunc1 = () => {
    console.log(this);
}
console.log("arrowFunc1", arrowFunc1());

// 函数内的箭头函数的 this 就是外层函数的 this
var pos = "global"
function outer() {
    console.log("outer", this.pos);
    const arrowFunc = () => {

        console.log("arrow", this.pos);
    };
    arrowFunc();
}
// outer函数的 this 指向 window
// 箭头函数在作用域链上查询，使用 outer 的 this
outer();
// window

// outer方法的this 指向obj3, 箭头函数也是
var obj3 = {
    pos: "obj3"
};
obj3.outer = outer;
obj3.outer();
// obj3

// 全局环境中的箭头函数 this 是undefined
const arrowFunc = () => {

    console.log("arrow", this.pos);
};
arrowFunc();


//

/*最佳实践
*   参数始终使用括号
*   函数体始终使用大括号
*   始终使用return
*   */