// 函数
function sayHi( name, message){
    console.log( "Hello " + name + ", " + message)
}
sayHi("qinghe", "how are you today?")

// 返回值
function add( num1, num2){
    return num1 + num2
    console.log( undeclareVar) //不会执行,所以不会报错
}
console.log( add(1, 1))

//函数参数
//arguments类数组对象
function sayHi( name, message){
    console.log("Hello " + arguments[0] + ", " + arguments[1])
}
sayHi("qinghe", "how are you today?")

//通过arguments.length模仿重载
function doAdd( num1, num2){
    if( arguments.length == 1){
        console.log( num1*10)
    }else if(arguments.length == 2){
        console.log( num1 * num2)
    }
}

// 命名参数与arguments是等价的
function plus( num1, num2){
    arguments[ 0] = 10
    console.log( num1 * num2)
}
plus( 1, 2)
