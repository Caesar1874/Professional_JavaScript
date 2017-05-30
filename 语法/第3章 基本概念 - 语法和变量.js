/**
 * Created by Administrator on 2016/9/17.
 */
// 语法

//单行注释
/*
多行
注释*/

// 严格模式
// 在脚本中启用严格模式
//"use strict"
// 指定函数在严格模式下执行
function doSomething(){
    //"use strict"
    // 函数体
}

//语句
var a=5 //可以没有分号
var b=2; //推荐使用分号
//代码块
if(true) {
    console.log("warining");
}

//变量
// 声明变量
var message;

//声明并初始化
var message="hi";

//动态类型
message=100; //改变值的同时改变类型

// var声明的是局部变量
function test(){
    var localVar="hi";
    globalVar="world";
}
test();
//console.log(localVar);
//省略var将创建全局变量
console.log(globalVar);

//一条声明语句声明多个变量
var found,
    age,
    name="qinghe"
