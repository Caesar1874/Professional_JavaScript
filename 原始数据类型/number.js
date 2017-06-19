


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



