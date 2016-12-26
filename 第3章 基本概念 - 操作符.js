
// 操作符
// 递增和递减操作符
    //用于非数值会进行类型转换
//前置型
var age=30
// age=age+1
++age

// age=age-1
--age

// age=age+1; anotherAge=age+1
var anotheAge=++age+1


//后置型
var weight=75
// 与++weight没有区别
weight++

weight--

//anotherWeight=weight+1; weight=weight+1
var anotherWeight=weight++ +1



//加和减
//+对数值无影响，-将数值便为负数
//+ - 用于非数值等同于调用Number()
// 0.1
+"0.1"

// NaN
+"z"
// 1
+true

var obj={
    valueOf: function(){
        return -1
    }
}
// NaN
+obj


// 逻辑操作符
//! 转换为布尔值再求反
    //!!等价于Boolean
!false
!""
!0
!null
!undefined
!null

//&&
//返回值不一定是布尔值
//规则1：特殊值，需要对null，undefined，NaN求逻辑值时会直接返回
null && undeclareVar
undefined && undeclareVar
NaN && undeclareVar
true && null
true && undefined
true && NaN

//规则2：短路操作，第一个值求逻辑值结果是false, 不会求第二个值，返回false
false && undeclareVar //undeclareVar未声明但是不会报错，因为不会求值
//console.logg(true && undeclareVar) //ReferenceError
false && null
false && undefined
false && NaN

//规则3：第一个值的求逻辑值结果是true, 返回第二个值
1 && 1
"a" && "a"
{} && {}

//||
//返回值不一定是布尔值
//规则1：特殊值，两个值都是null, undefined或NaN, 返回对应值

null || null
undefined || undefined
NaN || NaN
//规则2：短路操作，第一个值求逻辑值结果是true, 不会求第二个值，返回true
true || undeclareVar //undeclareVar未声明但是不会报错，因为不会求值
//console.log( false || undeclareVar ) //ReferenceError
//规则3：第一个值的求逻辑值结果是false, 返回第二个值
null || {}
undefined || {}
NaN || {}
false || {}

//指定默认值
var obj= perferedObj || defaultObj

// 乘性操作符
//*
    //作用于非数值时会调用Number()
NaN * 1 //NaN
NaN * Infinity //NaN
Infinity * 0 //NaN
Infinity * 1 //Infinity
Infinity * Infinity //Infinity

// /
//作用于非数值时会调用Number()
NaN / 1 //NaN
1 / NaN //NaN
0 / 0 //NaN
Infinity / Infinity //NaN
Infinity / 1 //Infinity
1 / 0 // Infinity

// %
//作用于非数值时会调用Number()
Infinity % 1 //NaN
1 % 0 //NaN
Infinity % Infinity //NaN
2 % Infinity // 2

// 加性操作符
// +
//两个操作数都是数值
NaN + 1 //NaN
Infinity + Infinity //Infinity
-Infinity + -Infinity //-Infinity
Infinity + -Infinity //NaN

//有一个操作数是字符串
    //非字符串调用toString()
"a" + "b" //"ab"
"a" + 1 //"a1"
"a" + true //"atrue"
"a" + {"a":1} //"a[object Oject]"
    //null和undefined调用String()进行转换
"a" + null //"anull"
"a" + undefined //"aundefined"

// -
    //作用于字符串，布尔值，null,undefined时会调用Number()
    //对象调用valueOf()或toString()
NaN - 1 //NaN
Infinity - Infinity //NaN
-Infinity - -Infinity //NaN
Infinity - -Infinity //Infinity
-Infinity - Infinity //-Infinity

// 关系操作符 < > <= >=
//有一个操作数是数值就按数值进行比较
2 > 11
2 > "11"
// 两个字符串按字符编码比较
"2" > "11"
//对象先调用valueOf，后调用toString
var obj= { valueOf: function(){ return -1}}
obj > 0
var obj2= { toString: function(){　return 1}}
obj2 > 0

//相等和不相等：== !=
//类型不同时类型转换
    //布尔值转换为0,1
true == 1
false == 0
    //字符串与数字进行比较时，字符串转换为数字
"11" > 2
"11" > "2"
    // 对象调用valueOf转换为基本类型
var obj= { valueOf: function(){ return -1}}
obj == -1
    //null和undefined不转换
null == "null"
null == false
undefined == "undefined"
undefined == false
//比较规则
    //null和undefined相等
null==undefined
    //操作数中有NaN返回false
NaN == NaN
    //两个对象引用同一个对象时返回true
{} == {})//false
var a={}
var b=a
a==b //true

// 全等和不全等：=== !==
    //不进行类型转换
1 === true
null === undefined
