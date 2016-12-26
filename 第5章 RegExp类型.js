/**
 * Created by Administrator on 2016/9/21.
 */
// RegExp类型
    
// 创建正则表达式实例
// 正则表达式字面量
 var regexpLiteral = /pattern/gim;
//RegExp构造函数
var regexpInstance = new RegExp( "pattern", "gim");
// RegExp的模式参数是字符串，元字符需要双重转义(这个问题比较复杂最后讨论)。

// 匹配模式标记:
//g: 全局模式
//i: 不区分大小写
//m: 多行模式

// 元字符具有特殊含义，要使用其特殊含义的话，不需要转义（字符串中的普通字符）或者一次转义(转义序列)；
// 如果要使用元字符的本意的话，因为在字符串中就需要双重转义，
var metaChar = new RegExp( "\\d");
console.log( metaChar.exec( "a2"));

// 正则表达式的实例属性
//global
console.log( regexpLiteral.global );
console.log( regexpLiteral.ignoreCase);
console.log( regexpLiteral.lastIndex);
console.log( regexpLiteral.multiline);
console.log( regexpLiteral.source); //字面量形式

//正则表达式的实例方法
// .exec(string): 以待匹配的字符串为参数；
// 找到匹配项时返回数组，第一个元素是string中的第一个匹配项
    //属性：index: 匹配项的索引，input字符串
// 没有匹配时返回null
var letters = /a/g;
console.log( letters.exec( "0a1a2a3a" )); //[ 'a', index: 1, input: '0a1a2a3a' ]
console.log( letters.lastIndex ); //index+1

//全局标识
// 即使设置了全局标识exec()每次也只返回一个匹配项
// 设置了全局标识exec()对同一个字符串多次匹配，将在字符串中查找新的匹配项
console.log( letters.exec( "0a1a2a3a"));
console.log( letters.lastIndex ); //index+1

// 如果没有全局标识, exec()对同一个字符串多次匹配，始终返回第一个匹配项，lastIndex始终为0


//子表达式的内容添加到语法中

// test方法
//字符串参数，找到匹配项时返回true， 否则false
console.log( letters.test("01234a"));

//toString
// toLocaleString
// 返回字面量
console.log( letters.toString());

// valueOf: 正则表达式字面量
console.log( letters.valueOf());

// 正则表达式语法
// . 匹配单个字符
var singleChar = /.t/;
console.log( singleChar.exec("pattern")); // [ 'at', index: 1, input: 'pattern' ]
//匹配.本身
var dot = /\.t/;
console.log(dot.exec( "at.t")); // [ '.t', index: 2, input: 'at.t' ]

//[] 匹配多个字符中的一个
// 字符集合
var section = /[abc]t/;
console.log( section.exec("ztbt") ); // [ 'bt', index: 2, input: 'ztbt' ]
// 字符区间集合
var lowerCase = /[a-z]/;
console.log( lowerCase.exec( "ABCz")); 
// [ 'z', index: 3, input: 'ABCz' ]
// 对字符集合取非
var noLowerCase = /[^a-z]/;
console.log( noLowerCase.exec( "abc9")); 
// [ '9', index: 3, input: 'abc9' ]


//对元字符进行转义
// 元字符包括：() [] {} . | ^ $ ? * +
var meta = /\[/;
console.log( meta.exec( "abz[a-z]")); 
// [ '[', index: 3, input: 'abz[a-z]' ]
// 元字符出现在字符集合中时可以不转义
var meta = /[_^.]/;
console.log( meta.exec( "tt.at.t")); 
// [ '.', index: 2, input: 'tt.at.t' ]

// 空白符
//     \n 换行符
//     \r 回车符
//     \t tab
//     \v 垂直制表符
//     \f 换页符


// 字符类别
\d [0-9]
\D [^0-9]
\w [a-zA-Z0-9_]
\W [^a-zA-Z0-9_]
\s [\f\n\r\t\v]
\S [\f\n\r\t\v]

//十六进制或被八进制
// \x 十六进制
// \0 八进制

// 匹配不确定数目的多个字符
// + 一个或多个
var plus = /\d+/;
console.log( plus.exec( "a123b")); 
//[ '123', index: 1, input: 'a123b' ]
// * 零个或多个
var asterisk = /\w*/;
console.log( asterisk.exec("a123_&&")); 
// [ 'a123_', index: 0, input: 'a123_&&' ]
// ? 零个或一个
var quest = /\w?/;
console.log( quest.exec( "a13_")); 
// [ 'a', index: 0, input: 'a13_' ]

//匹配确定数目的多个字符
// 指定重复次数
var interval = /a{3}/;
console.log( interval.exec( "aaaa" ));
// [ 'aaa', index: 0, input: 'aaaa' ]
// 重复次数区间
var interval = /a{1,3}/;
console.log( interval.exec( "aa"));
// [ 'aa', index: 0, input: 'aa' ]
// 最少重复次数
var leastInterval = /a{2,}/;
console.log( leastInterval.exec( "abaaa"))
// [ 'aaa', index: 2, input: 'abaaa' ]

// 贪婪匹配和懒惰匹配
// 贪婪匹配是指 + * {n, }的匹配次数是没有上限的，会匹配尽可能多的字符；
// 懒惰匹配是指 +？ *？ {n, }?会匹配尽可能少的字符
var lazyLeastInterval = /a{2,}?/;
console.log( lazyLeastInterval.exec("abaaa")); // [ 'aa', index: 2, input: 'abaaa' ]
//与上面进行比较

//位置匹配
// 边界限定符匹配的是位置，而不是特定字符

// \b 单词边界
// \b 匹配\w和\W之间的位置
var boundary = /\bcat\b/;
console.log( boundary.exec( "littlecatty and cat")); 
// [ 'cat', index: 16, input: 'littlecatty and cat' ]
// \B 非单词边界
// \B 匹配\w和\\w，或\W和|W之间
var Boundary = /\Bcat\B/;
console.log( Boundary.exec( "cat and littlecatty")); 
// [ 'cat', index: 14, input: 'cat and littlecatty' ]

// 字符串边界
// 字符串开始
var head = /^cat/;
console.log( head.exec("category"));
// [ 'cat', index: 0, input: 'category' ]
// 字符串结尾
var tail = /cat$/;
console.log( tail.exec("littlecat"));
// [ 'cat', index: 6, input: 'littlecat' ]

// 多行模式: 不知道如何建立多行字符串
var multiline = /^cat/m;
var text= "bategory\
category";
console.log( multiline.exec(text));

// 子表达式
// ()表示子表达式
var year = /(19|20)\d{2}/;
console.log( year.exec( "1984" ));
// [ '1984', '19', index: 0, input: '1984' ]
// 不使用子表达式
var yearFault = /19|20\d{2}/;
console.log( yearFault.exec( "1984")); 
// [ '19', index: 0, input: '1984' ]

// 回溯引用
// 通过 \number 引用前面的子表达式匹配的结果
// 子表达式从\1开始计数，\0表示整个正则表达式

// 匹配标题
var headingFault = /<[hH][1-6].*?<\/[hH][1-6]>/;
var text = "<h5>heading</h3>";
console.log( headingFault.exec( text ));
// [ '<h5>heading</h3>', index: 0, input: '<h5>heading</h3>' ]
// 这不是我们想要的结果

var heading = /<[hH]([1-6]).*?<\/[hH]\1/;
console.log( heading.exec( text )); //null

var html = "<h1>heading1</h1>";
console.log( heading.exec( html ));
// [ '<h1>heading1</h1', '1', index: 0, input: '<h1>heading1</h1>' ]

// 回溯引用进行替换
// 不知道在javascript中如何使用

// 前后查找
