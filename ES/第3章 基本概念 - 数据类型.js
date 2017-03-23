// 数据类型
//typeof操作符
    // typeof可以写作操作符，也可以作为函数
// "string"
typeof("a")

// "number"
typeof(1)
typeof(NaN)

// "boolean"
typeof(true)

// "undefined"
typeof(undefined)

// "object" null表示空对象
typeof(null)

// "object"
typeof({})

// "function"
typeof(function(){})

var undefinedVar
//未初始化： "undefined"
typeof(undefinedVar))

//未声明： "undefined"
typeof(undeclareVar)
    //对于未初始化和未声明的变量，typeof的结果都是undefined
    //应在声明时显式初始化变量，typeof返回undefined就表示未声明变量


//Undefined
var undefinedVar
console.log(undefinedVar===undefined) //true
//console.log(undeclareVar) //ReferenceError
    //未初始化变量的值是undefined, 但是获取未声明变量的值会报错
    //所以对于未声明变量唯一能执行的操作就是typeof, 可以执行delete但没意义

//Null
//表示空对象指针
//"object"
console.log(typeof(null))
//undefined派生自null, 以区分空对象指针和未初始化的变量
console.log(null==undefined)
//为区分null和undefined, 应将以后用来保存对象的变量初始化为null

//Boolean
//区分大小写
var found=true
var lost=false
//var location= True //ReferenceError, True是未定义的变量
//console.log(location)

//类型转换
//转换为false的值
Boolean("")
Boolean(0)
Boolean(NaN)
Boolean(null)
Boolean(undefined)

// Number
var intNum=1 //整数
var octaNum=070 //八进制整数
var hexNum=0x1f //十六进制整数
var floatNum= 1.1 //浮点数
var floatE= 2.125e7 //科学计数法

// false  不要比较浮点数
var a=0.1
var b=0.2
a+b==0.3

//数值范围
    //超出数值范围会转化为Infinity或-Infinity
    //Infinity无法参加运算？？？？
//isFinite()检测数值是否有穷

// true
isFinite(5)

// false
isFinite(Infinity)

// NaN
//表示应返回数值但未返回数值
//任何涉及NaN的操作都返回NaN
// NaN
NaN+5
//NaN不与任何值相等，包括自身
// false
NaN==NaN

//isNaN(): 不能转换为数值的值返回true
// true
isNaN(NaN)
isNaN("blue")
isNaN({}) // 先调用valueOf后调用toString

// false
isNaN(10)
isNaN("10")
isNaN(true)
isNaN(false)


//数值转换
//Number(): 适用于所有数据类型
//数值：直接返回
// 5
Number(5)
// NaN
Number(NaN)

//布尔值
// 1
Number(true)
// 0
Number(false)

//undefined
// NaN
Number(undefined)


//null
//0
Number(null)
//字符串
//只包含数字的字符串能转换

// 123
Number(" 123 ")
Number("+123")
Number("-123")
Number("00123")

// 0.01
Number("0.01")
Number("00.01")

// 15
Number("0xf")

//空字符串
// 0
Number("")

//包含其余字符转换为NaN
// NaN
Number(" 1 2 3")
Number("10a")

//对象: 先调用valueOf再转换，如果返回NaN，则调用对象的toString()再转换
// NaN
Number({})

//parseInt(): 字符串转换为十进制整数
    //忽略前导空格，中间的空格不能忽略
    //第一个非空字符不是数字或正负号，返回NaN
    //第一的非空字符是数字或负号，则解析数字直到非数字字符
// NaN
parseInt("")
parseInt("a10")

// 10
parseInt("  +10")
parseInt("  -10")
parseInt(" 10aa20")
parseInt(" 10.3") // .不是有效字符

// 10 十六进制
parseInt(" 0xa")
// 70 不能解析八进制，忽略前导0
parseInt(" 070 ")

    //第二个参数指定进制
    // 应该始终指定基数

// 10 可以不再使用0x表示十六进制
parseInt("0xa", 16)
parseInt("a", 16)

// 56 八进制前导0也是可以省略的
parseInt("070", 8)
parseInt("70", 8)

// parseFloat()
    //从第一个非空字符开始解析，忽略所有前导0
// 0.01
parseFloat("0.01")
parseFloat(" 00.01")
// 0.01 第二个.就是非法的了
parseFloat(" 0.01.1")

//十六进制始终会被解析为0
parseFloat("0xa")

// 70
parseFloat("70.0") //整数

// 字符串
    //16位 Unicode字符
    //字符串是不可变的
//转义序列
    //转义序列只表示一个字符
// \
"\\"

// 换行
"a\nb"

// 制表
"a\tb"

// 空格
"a\bb"

// 回车
"a\rb"

// "A" 单字节字符
"\x41"

// "Σ" 双字节字符
"\u03a3"

// "ABC"
var str="\x41\x42\x43"
str.length //3

//转换为字符串
//.toString
    //null, undefined没有.toString方法
var bool=true
bool.toString()
// "true"

var str="abc"
str.toString()
// "abc"

var obj={}
obj.toString()
//"[object Object]"

//十进制转换为其他进制
var num=10
num.toString()
// "10"

num.toString(2)
// "1010"

num.toString(16)
// "a"

//String()
    // 可以将任何值转换为字符串，null和undefined转换为字符串，其他值调用toString方法
String(null)
// "null"

String(undefined)
// "undefined"

//Object
//创建对象
var obj1=new Object()
var obj2=new Object //省略()
console.log(obj1.constructor)
