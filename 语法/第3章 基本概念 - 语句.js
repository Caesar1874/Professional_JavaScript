
// 语句
// if
var age=23
if( age>18){
    console.log( "adult")
}else if( age>12){
    console.log( "teenager")
}else{
    console.log( "child")
}

// do while
var i=0
var sum=0
do{
    sum+=i
    i++
}while( i<10)
console.log( sum)

// while
var i=0
var sum=0
while( i<10){
    sum+=i
    i++
}
console.log( sum)

var sum=0
for( var i=0; i<10; i++){
    sum+=i
}
console.log( sum)

// for in语句
var letters={ "a":1, "b":2, "c":3, "d":4}
for ( var letter in letters){
    console.log( letters[letter])
}

// break语句
//求1-10之间5的倍数
var num = 0
for( var i=1; i<10; i++ ){
    if( i%5 == 0){
        break
    }
    num++
}
console.log( num) //4 循环执行了4次

var num = 0
for( var i =1; i < 10; i++){
    if( i % 5 == 0){
        continue
    }
    num++
}
console.log( num) //循环执行了8次， i=5跳过

// label语句
// 为语句添加标签
var num = 0
for( var i = 0; i < 10; i++){
    for( var j = 0; j < 10; j++){
        if( i==5 && j==5){
            break
        }
        num++
    }
}
console.log( num) //95, i=5, j=5-9未执行

var num = 0
outermost: for( var i =0; i < 10; i++ ){
    for( var j = 0; j < 10; j++){
        if( i == 5 && j == 5){
            continue outermost
        }
        num++
    }
}
console.log( num) //95, i=5, j=5时直接进入i=6

var num = 0
outermost: for( var i =0; i < 10; i++ ){
    for( var j = 0; j < 10; j++){
        if( i == 5 && j == 5){
            break outermost
        }
        num++
    }
}
console.log( num) // 55, i=5, j=5时退出循环

// switch语句
// 使用全等操作符进行比较
// break
var age= 18
switch ( true){
    case age > 50:
        console.log( "old")
        break
    case age > 18:
        console.log( "adault")
        break
    case age > 12:
        console.log( "teenager")
        break
    default:
        console.log( "child")
}
