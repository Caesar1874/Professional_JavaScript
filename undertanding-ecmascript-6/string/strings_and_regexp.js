let log = (...args) => console.log.apply(console, args);

// identifying substring
var msg = "Hello world!";
// 省略第二个参数，startsWith 和 includes 从开始搜索，endsWith从结尾搜索
log(msg.startsWith("Hello"));
log(msg.endsWith("world!"));
log(msg.includes("llo"));

// 第二个参数，指定开始搜索的位置，
// 对于startsWith  和 includes 从前向后搜索，并且包含指定位置
log(msg.startsWith("H", 1));
log(msg.includes("e", 2));

// 对于endsWith 从后向前检索，而且不包含指定位置
// 5 指定空格
log(msg.endsWith("llo", 5));

// repeat
const str1 = "abc";
log(str1.repeat(3));

// 模板字符串

// 多行字符串
let message = `multi 
    line`;
log(message);
// 注意空格
log(message.length);

// 置换
let name = "nicholas";
console.log(`hello, ${name}`);

// tagged template
