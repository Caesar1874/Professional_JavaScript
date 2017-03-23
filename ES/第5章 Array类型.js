/**
 * Created by Administrator on 2016/9/20.
 */

// Object类型
//创建Object实例
//构造函数
const student = new Object()
student.name = "Caesar"
student.age = "23"
console.log( student)
// 字面量
// 字面量的属性名可以是标识符也可以是字符串,
    // 实际上标识符也会转换为字符串(?)
const student = {
    name: "Caesar",
    age: "24",
    "job": "Engineer"
}
log( student)

// 访问对象的属性
// 点访问法：.后面只能是属性名
log( student.name)
//方括号法：方括号中可以是表示属性的变量或字符串
log( student["name"])
const constiable = "name"
log( student[constiable])

// Array
// 创建Array的实例
// 构造函数
const arr1 = new Array() //空数组
log(arr1);

const arr2 = new Array( 10) //传入一个数值，指定数组长度, 此时元素是undefined
log( arr2)

const arr3 = new Array( "red", "green", "blue") //传入一个非数值元素或多个值指定数组元素

//字面量
const arr4 = ["red", "blue", "green"]

const arr5 = [ 1, 2, 3, ]
log( arr5.length) //3

const none = [ , , ,]
log( none.length) //3

// 访问数组元素
log( colors[ 1])
log( colors[ 3]) //undefined
colors[ 3] = "yellow"
log( colors[ 3])

//length属性
//自动更新
log( colors.length )
colors[ 4 ] = "purple"
log( colors.length) //始终是最后一个元素的索引+1
//通过length添加或删除元素
colors.length = 4
log( colors) //purple被删除

colors.length = 5
log( colors) //添加了一个undefined元素
//所以通过length可以在数组尾部添加元素
colors[ colors.length ] = "white"
log( colors )

// 判断数组
// 存在多个全局执行环境时，Array函数有多个，instanceof会进行区分
// Array.isArray(): 无视多个Array
log( Array.isArray( [] ))

// 类型转换
log( colors.toString()) //数组元素构成的以逗号分隔的字符串
log( colors.valueOf()) //返回数组本身
    //数组中的undefined或null以空字符串表示

// 栈：后进先出
const values = [1, 2, 3, 4]
// push, 接受任意数量的元素，并添加到数组尾部，返回新length
const length = values.push(5, 6, 7)
log( values)
log( length)

//pop: 删除数组的最后一项， 返回删除的元素
const tail = values.pop()
log( values )
log( tail )

// 队列: 先进先出
// push实现后进
// shift: 删除数组中的第一个元素，并返回
const head = values.shift()
log( values );
log( head );

// 反向队列： 还是先进先出，但是从头部进，尾部出
// unshift: 在数组头部添加任意多个元素并返回新length
const length = values.unshift( 0, 1 );
log( values );
log( length );
values.pop()
log( values )

// 排序
// 逆序
log( values.reverse() );

// sort() ：调用每一项的toString(),按字符编码进行排序
const numbers = [ 1, 3, 6, 10, 20, ,51 ]
log( numbers.sort() ); //[ 1, 10, 20, 3, 51, 6 ]
// 比较函数
//升序
function compare( a, b ){
    return a - b;
}
log( numbers.sort( compare ) );
//undefined项总是排在最后

// 操作方法: 总是
// concat(): 添加元素或合并数组，返回新数组
const colorful = [ "red", "green"];
const newColorful = colorful.concat( "yellow", [ "purple", "white"], {name:"qinghe"});
log( newColorful );
// [ 'red', 'green', 'yellow', 'purple', 'white', { name: 'qinghe' } ]

//获取副本
const copyColorful = colorful.concat();
log( copyColorful );

// slice: 切片，返回新数组
const words = [ "zero", "one", "two", "three"];
log( words.slice( 1, 3 ));
log( words.slice( 1 ));

log( words.slice( -2, -1 ));
//等价于(-2 + length, -1 + length)
const len = words.length;
log( words.slice( -2 + len, -1 + len ))

// start大于end, 返回[]
log( words.slice( 4, 2 ) );
log( words.slice( -1, -3 ) );

// splice: 替换,直接操作原数组， 返回删除的项
// 替换
words.splice( 1, 2, 1, 2 );
log( words );
// 新添加的项多余被替换的项就是插入
words.splice( 2, 0, "two", 3);
log( words );
// 被替换的项少于新添加的项就是删除
words.splice( 3, 2);
log( words );

// 查找: 查找指定项，返回索引, 不存在返回-1
const mat = [ "zero", "one", "two", "two","one", "zero"]
log( mat.indexOf("one", 0));
log( mat.indexOf( "one", 3));
log( mat.lastIndexOf( "one", 5));
log( mat.lastIndexOf( "one", 3))

//迭代
//不会改变原数组
const nums = [1, 2, 3, 4, 5, 4, 3, 2, 1];
//forEach: 无返回值
nums.forEach( function( item, index, arr){
    log("[" + arr + "]" + "[" + index + "] = " + item);
})

//map: 返回函数返回值组成的数组
const returnArr = nums.map( function( item, index, arr){
    return item * item;
})
log( returnArr );

//filter: 返回函数返回值为true的项组成的数组
const truthArr = nums.filter( function( item, index, arr){
    return item % 2 === 0;
})
log( truthArr );

// every: 函数的返回值全为true,则返回true
const boolEvery = nums.every( function( item, index, arr){
    return item > 0;
})
log( boolEvery );
//some: 函数的返回值有一个为true, 则返回true
const boolSome = nums.some( function( item, index, arr){
    return item === 5;
})
log( boolSome );

// 化简方法
// reduce: 从左到右化简
const val = [ 1, 2, 3, 4, 5];
const result = val.reduce( function( prevItem, currItem, index, arr){
    return prevItem + currItem;
}, 10)
log( result )

const result = val.reduceRight( function( prevItem, currItem, index, arr){
    return prevItem + currItem;
}, 10)
log( result );