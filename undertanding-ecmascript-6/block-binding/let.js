/**
 * Created by Administrator on 2016/9/20.
 */

"use strict"
// let
// 声明只在块级作用域中有效的变量
{
    var a = 1
    let b = 10
}
console.log( a)
// console.log( b) //b is not defined

// let用于for循环
var arr=[]
for( let i=0; i < 10; i++){
    arr[i]=function(){
        console.log( i)
    }
}
arr[6](6) //for中使用var的话无法实现

// 不存在变量提升
console.log( foo) //undefined
// console.log( bar) // bar is not defind
var foo=1
let bar=2

// 暂时性死区TDZ
//块级作用域中let声明变量之前该变量是不可用的
var tmp= 123
if( true){
    // TDZ开始
    // console.log( tmp) //tmp is not defined
    let tmp
    // TDZ结束
    tmp = 1
    console.log( tmp) //undefined
}

// typeof操作符
console.log(typeof undeclareVar ) //undefined
// console.log( typeof x) //typeof不再完全安全了
let x

// let不允许重复声明
{
    var m = 1
    // let m = 1 // m has already been declared
}
{
    let n = 1
    // var n = 1 // n has already been declared
}
{
    let l = 1
    // let l = 1 // l has already been declared
}


// 块级作用域
// let实际上创建了块级作用域
function doSomething(){
    let d = 1
    if(true){
        let d =2
    }
    console.log( d)
}
//doSomething() //1

// 块级作用域可以代替IIFE
(function(){
    var localVar
})()

{
    let localVar
}

//在块级作用域中声明函数
// es6允许在块级作用域中声明函数
if( true){
    function tmp(){
        ;
    }
}
// 在块级作用域中声明的函数在块级作用域外不可引用, 相当于let
function func(){
    console.log( "outside")
}
( function(){
    if( true){
        function func(){
            console.log( "inside") //对作用域外没有影响
        }
    }
    func() //outside
}())

//es5不允许在块级作用域中声明函数， 但是浏览器实际上支持在块级作用域中声明函数,但是块级作用域不起作用，函数声明提升至局部作用域头部
// 所以以上代码在es5中的运行结果是inside

//为兼容es6和es5，浏览器的实现是：
    //允许在块级作用域声明函数
    //函数声明会提升至局部作用域的头部，相当于var
    //函数声明也会提升至块级作用域的头部，相当于let
//所以以上代码在es6的浏览器环境中会报错，相当于 //实际测试输出inside
function func(){
    console.log( "outside")
}
(function(){
    //var func //块级作用域中的func提升至局部作用域头部
    if( true){
        function func(){
            console.log( "inside")
        }
    }
    func()
}())

//避免在块级作用域中声明函数，应使用函数表达式



