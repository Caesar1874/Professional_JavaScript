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
