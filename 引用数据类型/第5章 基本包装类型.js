
// 创建基本包装类型的实例
var str = new String("text");
console.log(str)
// chrome: String {0: "t", 1: "e", 2: "x", 3: "t", length: 4, [[PrimitiveValue]]: "text"}

var bool = new Boolean(true);
console.log(bool);
// Boolean {[[PrimitiveValue]]: true}

var num = new Number(23);
console.log(num);
// Number {[[PrimitiveValue]]: 23}

// 使用new调用基本包装类型的构造函数等价于new Object(),并传入对应的基本类型值
var str = new Object("text");
console.log(str);
// String {0: "t", 1: "e", 2: "x", 3: "t", length: 4, [[PrimitiveValue]]: "text"}

var bool = new Object(true);
console.log(bool);
// Boolean {[[PrimitiveValue]]: true}

var num = new Number(23);
console.log(num);
// Number {[[PrimitiveValue]]: 23}

// 基本包装类型: typeof操作符和instanceof
console.log(typeof(str)); // object
console.log(str instanceof String); //true

console.log(typeof(bool)); // object
console.log(bool instanceof Boolean); //true

console.log(typeof(num)); // object
console.log(num instanceof Number); //true

//对基本类型调用方法时，会自动创建其包转类型，但随即销毁
var person = "Caesar";
person.age = 12;
console.log(person.age); //undefined

//使用new调用String, Boolean, Number时它们是构造函数， 直接调用时是转型函数
var value = Number(6);
console.log(typeof value); //number

// Boolean类型
// valueOf(): 基本类型值
console.log(bool.valueOf());
// toString(): 对应字符串
console.log(typeof bool.toString());

// Number类型
// valueOf(): 基本类型值
console.log(num.valueOf());
// toString(): 对应字符串
console.log(typeof num.toString());

// 数值格式化为字符串的方法
var number = 110.2345;

// toFixed(): 按指定的小数位数返回数值的字符串
console.log(number.toFixed(2)); //  110.23

//toExponential(): 以e表示法返回数值的字符串, 参数指定小数位数
console.log(number.toExponential(2)); //1.10e2

//toPrecision(): 以fixed或exponential格式返回字符串，参数指定有效数字位数
console.log(number.toPrecision(2)); //1.1e2

// String(): 类型
// length: 字符个数
var strValue = "hello";
console.log(strValue.length);

// valueOf,toString()： 字符串值
console.log(strValue.valueOf());
console.log(strValue.toString());

// 字符方法
console.log(strValue.charAt("1"));
//等价于
console.log(strValue[1]);

console.log(strValue.charCodeAt("1"));

//字符串操作方法: 以下所有方法strValue不变，返回副本

//拼接
console.log(strValue.concat(" world"));
// 切片
console.log(strValue.slice(1, 3));
console.log(strValue.slice(1));
console.log(strValue.slice(-3, -1));
//子串: 第二个参数指定字符个数
console.log(strValue.substr(1, 3));
console.log(strValue.substr(-3, 3));

// 检索
console.log(strValue.indexOf("l"));

console.log(strValue.lastIndexOf("l")); // 3
console.log(strValue.lastIndexOf("ll")); //2,而不是3

console.log(strValue.indexOf("l", 3));
console.log(strValue.lastIndexOf("l", 2));

// 检索所有匹配子串
var lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, tempora";
var position = [];
var pos = lorem.indexOf("e");

while(pos > -1){
    position.push(pos);
    pos = lorem.indexOf("e", pos + 1);
}
console.log( position );

//trim(): 删除前置和后置空格
var space = "  abc  ";
console.log(space.trim());

// 大小写转换
var words = "HTML and css";
console.log(words.toLowerCase());
console.log(words.toUpperCase());

// 字符串的模式匹配方法
// match()
// search()
//replace()
