/**
 * Created by Administrator on 2016/9/20.
 */
// 基本类型值引用类型值的区别
// 动态添加属性
//引用类型
var person = new Object()
person.name = "Nicholas"
console.log(person.name)
//不能为引用型添加属性
var name = "Nicholas"
name.age= 27
console.log( name.age) //undefined

//值复制
//基本类型复制的是值
var num1 = 5
var num2 = num1
num2 = 6
console.log( num2)
console.log( num1)

//引用类型复制的是引用
var obj1 = new Object()
var obj2 = obj1
obj2.name = "Caesar"
console.log( obj1.name)

// 参数传递
// 函数参数按值传递， 相当于值复制
//基本类型
function add( num){
    num += 1
    return num
}
var x = 10
var y = add(x) // 将x复制给num
console.log( y) // 11
console.log( x) // 10

//引用类型
function setName( obj){
    obj.name = "Caesar"
    return obj
}
var obj1 = new Object()
var obj2 = setName( obj1) //将obj1复制给obj2，但复制的是引用
console.log( obj2.name) //Caesar
console.log( obj1.name) //Caesar

// 类型检测
//基本类型的检测使用typeof操作符
console.log( typeof "a")
console.log( typeof 1)
    console.log(typeof NaN) //number
console.log( typeof true)
console.log( typeof undefined)
console.log( typeof null)

//引用类型的检测使用instanceof
// 语法： variable instanof construtor
console.log( {} instanceof Object) //所有引用类型都是Object的实例
console.log( [] instanceof Array)
console.log( /a/ instanceof RegExp)
//基本类型总是返回false, 即使使用对应的包装对象构造函数
console.log( 1 instanceof Number)
console.log( "a" instanceof String)
console.log( null instanceof Object)

// 以下语句会报错，不知道为啥
// {} instanceof Object;
// 但以下语句不会
var obj = {}
obj instanceof Object

