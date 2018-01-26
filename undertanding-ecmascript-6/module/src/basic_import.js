

// basic import

// 导入一个绑定
import {color} from "./basic_export.js";
console.log(color);

// 导入多个绑定
import {name, magic, sum, multiply} from "./basic_export.js";
console.log(name);
console.log(magic);
console.log(sum(1, 1));
console.log(multiply(2, 2));

// 导入整个模块
import * as example from "./basic_export.js";
console.log(example.color);
console.log(example.name);


// 导入的绑定行为类似于const:

// 不能定义同名变量
// Error
// var color;
// const name;

// 不能导入同名的另一个绑定, 包括重复导入
// Error
// import {color} from "./basic_export";

// 不能在导入之前使用
// Error
// console.log(getText);

// 不能再导入之后改变其值
// Error
// color = "blue";

// 通过导入的函数改变导入的变量
import {age, setAge} from "./basic_export";
console.log("age", age);
setAge("21");
console.log("new age", age);

// renaming import
import {add as plus} from "./basic_export";
console.log("1 + 1 = ", plus(1, 1));


// 导入默认值: 没有花括号
import sum5 from "./basic_export";
console.log(sum5(1, 5));

/*import sum6 from "./basic_export";
console.log(sum6(1, 6));*/

// 同时导入默认值和非默认值
// 默认值必须在非默认值之前
import sum6, {nonDefault} from "./basic_export"
console.log(sum6(1, nonDefault));



