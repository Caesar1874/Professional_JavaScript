
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



//String()
// 可以将任何值转换为字符串，null和undefined转换为字符串，其他值调用toString方法
String(null)
// "null"

String(undefined)
// "undefined"