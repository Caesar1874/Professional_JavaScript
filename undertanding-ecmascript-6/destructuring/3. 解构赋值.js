// 在浏览器中进行测试

// 数组的解构赋值
var [a, b, c] = [1, 2, 3];
// 等价于
// var a = 1;
// var b = 2;
// var c = 3;
console.log(a, b, c); // 1 2 3

// 等号两侧模式相同
var [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo, bar, baz); // 1 2 3

var [ , , third] = ["foo", "bar", "baz"];
console.log(third); //baz

// 使用...
var [head, ...tail] = [1, 2, 3, 4];
console.log(head); //1
console.log(tail) //[2, 3, 4]

var [x, y, ...z] = ["a"];
console.log(x, y, z); // a undefined, []

//部分解构
var [x, y] = [1, 2, 3];
console.log(x, y); // 1 2

var [a, [b], d] = [1, [2, 3], 4];
console.log(a, b, d); // 1 2 4

//解构不成功的变量值为undefined
var [foo] = [];
console.log(foo); // undefined
var [bar, foo] = [1];
console.log(foo); // undefined

//等号右侧是不可遍历的结构会报错
var [foo] = 1;
var [foo] = false;
var [foo] = NaN;
var [foo] = undefined;
var [foo] = null;
var [foo] = {};

//解构赋值同样适用于let和const

// 默认值
var [x, y = "b"] = ["a"];
console.log(x, y); // a b

//默认值在解构值为undefined( 严格相等 )时生效
var [x, y = "b"] = ["a", undefined];
console.log(x, y) // a b

// 默认值可以引用解构赋值的其他变量
var [x = 1, y = x] = [];
console.log(x, y); // 1 1

let [x = y, y = 1] = []; //ReferenceError, x引用y时，y
//使用var声明时不会报错，let的暂时性死区

// 对象解构赋值
var {foo, bar} = {foo: "aaa", bar:"bbb"};
console.log(foo, bar); //aaa, bbb

//数组的解构赋值基于位置，对象的解构赋值基于属性名与变量的对应
var {baz} = {foo:"aaa", bar:"bbb"};
console.log(baz); //undefined
// 变量名与属性名不对应要写成如下形式: foo是模式，只有baz被赋值
var {foo:baz} = {foo:"aaa"};
console.log(baz); // aaa
console.log(foo); //ReferenceError

//嵌套结构的对象
var obj = {
    p: ["Hello", {y:"world"}]
};
var {p: [x, {y}]} = obj;
console.log(x, y);

// 对象解构指定默认值
// 默认值生效的条件是属性值严格等于undefined
var {x = 3} = {};
console.log(x); // 3

var {x: y = 5} = {};
console.log(y); //5

// 解构失败
var {foo} = {bar: "baz"};
console.log(foo); //undefined

var {foo: {bar}} = { baz: "baz"}; //Error, foo是属性不是模式，但foo是undefined, 访问其属性会报错









