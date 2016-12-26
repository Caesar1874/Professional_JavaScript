/**
 * Created by Administrator on 2016/9/20.
 */

// Object类型
//创建Object实例
//构造函数
var student = new Object()
student.name = "Caesar"
student.age = "23"
console.log( student)
// 字面量
// 字面量的属性名可以是标识符也可以是字符串,
    // 实际上标识符也会转换为字符串(?)
var student = {
    name: "Caesar",
    age: "24",
    "job": "Engineer"
}
console.log( student)

// 访问对象的属性
// 点访问法：.后面只能是属性名
console.log( student.name)
//方括号法：方括号中可以是表示属性的变量或字符串
console.log( student["name"])
var variable = "name"
console.log( student[variable])

// Array
// 创建Array的实例
// 构造函数
var colors = new Array() //空数组
console.log( )
var arr2 = new Array( 10) //传入一个数值，指定数组长度, 此时元素是undefined
console.log( arr2)
var colors = new Array( "red", "green", "blue") //传入一个非数值元素或多个值指定数组元素
//字面量
var colors = ["red", "blue", "green"]
var values = [ 1, 2, 3, ]
console.log( values.length) //3
var none = [ , , ,]
console.log( none.length) //3

// 访问数组元素
console.log( colors[ 1])
console.log( colors[ 3]) //undefined
colors[ 3] = "yellow"
console.log( colors[ 3])

//length属性
//自动更新
console.log( colors.length )
colors[ 4 ] = "purple"
console.log( colors.length) //始终是最后一个元素的索引+1
//通过length添加或删除元素
colors.length = 4
console.log( colors) //purple被删除

colors.length = 5
console.log( colors) //添加了一个undefined元素
//所以通过length可以在数组尾部添加元素
colors[ colors.length ] = "white"
console.log( colors )

// 判断数组
// 存在多个全局执行环境时，Array函数有多个，instanceof会进行区分
// Array.isArray(): 无视多个Array
console.log( Array.isArray( [] ))

// 类型转换
console.log( colors.toString()) //数组元素构成的以逗号分隔的字符串
console.log( colors.valueOf()) //返回数组本身
    //数组中的undefined或null以空字符串表示

// 栈：后进先出
var values = [1, 2, 3, 4]
// push, 接受任意数量的元素，并添加到数组尾部，返回新length
var length = values.push(5, 6, 7)
console.log( values)
console.log( length)

//pop: 删除数组的最后一项， 返回删除的元素
var tail = values.pop()
console.log( values )
console.log( tail )

// 队列: 先进先出
// push实现后进
// shift: 删除数组中的第一个元素，并返回
var head = values.shift()
console.log( values );
console.log( head );

// 反向队列： 还是先进先出，但是从头部进，尾部出
// unshift: 在数组头部添加任意多个元素并返回新length
var length = values.unshift( 0, 1 );
console.log( values );
console.log( length );
values.pop()
console.log( values )

// 排序
// 逆序
console.log( values.reverse() );

// sort() ：调用每一项的toString(),按字符编码进行排序
var numbers = [ 1, 3, 6, 10, 20, ,51 ]
console.log( numbers.sort() ); //[ 1, 10, 20, 3, 51, 6 ]
// 比较函数
//升序
function compare( a, b ){
    return a - b;
}
console.log( numbers.sort( compare ) );
//undefined项总是排在最后

// 操作方法: 总是
// concat(): 添加元素或合并数组，返回新数组
var colorful = [ "red", "green"];
var newColorful = colorful.concat( "yellow", [ "purple", "white"], {name:"qinghe"});
console.log( newColorful );
// [ 'red', 'green', 'yellow', 'purple', 'white', { name: 'qinghe' } ]

//获取副本
var copyColorful = colorful.concat();
console.log( copyColorful );

// slice: 切片，返回新数组
var words = [ "zero", "one", "two", "three"];
console.log( words.slice( 1, 3 ));
console.log( words.slice( 1 ));

console.log( words.slice( -2, -1 ));
//等价于(-2 + length, -1 + length)
var len = words.length;
console.log( words.slice( -2 + len, -1 + len ))

// start大于end, 返回[]
console.log( words.slice( 4, 2 ) );
console.log( words.slice( -1, -3 ) );

// splice: 替换,直接操作原数组， 返回删除的项
// 替换
words.splice( 1, 2, 1, 2 );
console.log( words );
// 新添加的项多余被替换的项就是插入
words.splice( 2, 0, "two", 3);
console.log( words );
// 被替换的项少于新添加的项就是删除
words.splice( 3, 2);
console.log( words );

// 查找: 查找指定项，返回索引, 不存在返回-1
var mat = [ "zero", "one", "two", "two","one", "zero"]
console.log( mat.indexOf("one", 0));
console.log( mat.indexOf( "one", 3));
console.log( mat.lastIndexOf( "one", 5));
console.log( mat.lastIndexOf( "one", 3))

//迭代
//不会改变原数组
var nums = [1, 2, 3, 4, 5, 4, 3, 2, 1];
//forEach: 无返回值
nums.forEach( function( item, index, arr){
    console.log("[" + arr + "]" + "[" + index + "] = " + item);
})

//map: 返回函数返回值组成的数组
var returnArr = nums.map( function( item, index, arr){
    return item * item;
})
console.log( returnArr );

//filter: 返回函数返回值为true的项组成的数组
var truthArr = nums.filter( function( item, index, arr){
    return item % 2 === 0;
})
console.log( truthArr );

// every: 函数的返回值全为true,则返回true
var boolEvery = nums.every( function( item, index, arr){
    return item > 0;
})
console.log( boolEvery );
//some: 函数的返回值有一个为true, 则返回true
var boolSome = nums.some( function( item, index, arr){
    return item === 5;
})
console.log( boolSome );

// 化简方法
// reduce: 从左到右化简
var val = [ 1, 2, 3, 4, 5];
var result = val.reduce( function( prevItem, currItem, index, arr){
    return prevItem + currItem;
}, 10)
console.log( result )

var result = val.reduceRight( function( prevItem, currItem, index, arr){
    return prevItem + currItem;
}, 10)
console.log( result );