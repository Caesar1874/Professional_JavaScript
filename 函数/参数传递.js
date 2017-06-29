
// 函数参数参数按值传递，也就是 赋值
// 对于基本类型，赋值就是创建了新的值，在函数对参数进行修改不会影响外面的变量
// 基本类型实际是不可变的


var foo = function (arg) {
  arg = 'abc'
}
var str = '123'
foo(str)
console.log(str)
