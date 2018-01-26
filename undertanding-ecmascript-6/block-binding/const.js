/**
 * Created by Administrator on 2016/9/20.
 */
"use strict"
// const
// 声明常量
const pi = 3.14
// pi = 3.14159 //报错

//声明时必须初始化
// const e

//const声明的变量只在块级作用域中有效，不存在声明提升，存在暂时性死区， 不可重复声明

// const声明引用类型的值
// 引用类型的变量保存的是数据的地址，所以const声明的引用类型的变量只能保证变量指向的地址不变，不能保证该地址的数据不变
const foo ={}
foo.prop=123
console.log(foo.prop)

// 全局变量
// es6中共有6中声明变量的方法：var, function, let, const, import, class
// es6中var，function声明的全局变量仍然是全局对象的属性
// let, const, class声明的全局变量不是全局对象的属性

//在浏览器中测试
var globalVar = 1
let globalLet = 2
console.log( window.globalVar)
console.log( window.globalLet)
