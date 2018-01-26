"use strict";

var _basic_export = require("./basic_export.js");

var example = _interopRequireWildcard(_basic_export);

var _basic_export2 = require("./basic_export");

var _basic_export3 = _interopRequireDefault(_basic_export2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log(_basic_export.color);

// 导入多个绑定


// basic import

// 导入一个绑定

console.log(_basic_export.name);
console.log(_basic_export.magic);
console.log((0, _basic_export.sum)(1, 1));
console.log((0, _basic_export.multiply)(2, 2));

// 导入整个模块

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

console.log("age", _basic_export2.age);
(0, _basic_export2.setAge)("21");
console.log("new age", _basic_export2.age);

// renaming import

console.log("1 + 1 = ", (0, _basic_export2.add)(1, 1));

// 导入默认值: 没有花括号

console.log((0, _basic_export3.default)(1, 5));

/*import sum6 from "./basic_export";
console.log(sum6(1, 6));*/

// 同时导入默认值和非默认值
// 默认值必须在非默认值之前

console.log((0, _basic_export3.default)(1, _basic_export2.nonDefault));