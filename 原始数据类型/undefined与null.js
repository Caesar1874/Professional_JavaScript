

//Undefined
var undefinedVar
console.log(undefinedVar === undefined) //true
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