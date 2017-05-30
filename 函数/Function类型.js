/**
 * Created by Administrator on 2016/9/22.
 */

// ## 创建函数类型的实例
// 函数声明
// ```
function sum(num1, num2){
    return num1 + num2;
}
console.log(sum( 1, 1));
// ```
// 函数表达式
// '''
var sum = function( num1, num2){
    return num1 + num2;
}
console.log( sum(1, 1));
// ```
// Function构造函数
// ```
var sum= new Function("num1", "num2", "return num1+num2");
console.log( sum( 1, 1));
// ```


// ### 函数的内部属性
// 这些属性只能在函数内访问；
// arguments: 类数组对象，保存函数的实参；
// ```
function sum( num1, num2 ){
    return arguments[0] + arguments[1];
}
console.log( sum( 1, 1 ));
// ```
// arguments.callee：指向函数本身
// ```
function factorial( num ){
    if( num <= 1){
        return 1;
    }else{
        return num*arguments.callee( num - 1);
    }
}
console.log( factorial( 5 ));
//```
// this
// 参见：深入理解系列this

// caller
// 指向调用当前函数的函数
//```
function outer(){
    inner();
}
function inner(){
    console.log( inner.caller);
}
outer(); //[Function: outer]
//```
// 为实现松耦合应使用arguments.callee.caller代替inner.caller

// ### 函数的属性
// length属性: 函数的形参个数；
// ```
console.log( sum.length );
// ```

// prototype: 指向实例的原型对象，原型对象保存着引用类型的所有继承的实例方法；
console.log( sum.prototype);
// apply
// call
// bind()
//////////////////////////////////////////////////////
var variable = 22;
function foo(){
    var variable = 11;
    console.log(this.variable);
}

foo(); //22
console.log( foo === foo.prototype.constructor );//true
foo.prototype.constructor(); // undefined

console.log( "here" );
var foo={
    bar:function(){
        console.log(this===foo);
    }
};
foo.bar(); // true
var test=foo.bar;
console.log(test === foo.bar); // true
test(); // false
