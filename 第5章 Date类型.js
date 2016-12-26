/**
 * Created by Administrator on 2016/9/21.
 */
// Date类型
// 创建Date类型的实例
var now = new Date(); //当前日期和时间
console.log( now );

//以指定日期和时间创建Date实例；
// 传入指定时间和日期的字符串
console.log( new Date("sep 20 2016 09:34:56"));
    //Date()会在后代调用Date.parse()将日期字符串转换为毫秒数
// 传入指定指定日期和时间的数字参数：YYYY, MM( 0-12 ), DD, hh, mm, ss, msms
console.log( new Date(2016, 08, 20, 09, 34, 56));
    //Date()会在后台调用Date.UTC()将数值转换为毫秒数

//Date.now(): 当前时间的毫秒数
var start = Date.now();
console.log( Math.pow(2, 64) );
var end = Date.now();
console.log( end - start );

//继承方法
console.log( now.toString() );
console.log( now.toLocaleString() ); //以本地格式返回时间
console.log( now.valueOf()); //时间的毫秒数

//时间和日期方法
//毫秒数
var now = new Date();
now.setTime(Date.parse( " jun 6 1990") );
console.log( now.getTime() ); //毫秒数

//full year
now.setFullYear( 2008 );
console.log( now.getFullYear());

//month
now.setMonth( 08 );
console.log( now.getMonth());

//date
now.setDate( 07 );
console.log( now.getDate());

// day: 0-6
console.log( now.getDay());

// hours
now.setHours(06);
console.log( now.getHours());

//minutes
now.setMinutes( 05 );
console.log( now.getMinutes());

//seconds
now.setSeconds( 59 );
console.log( now.getSeconds());

//millseconds
now.setMilliseconds( 999 );
console.log( now.getMilliseconds());

//本地时间与UTC时间的时差： 分钟数
console.log(now.getTimezoneOffset());


