"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sum = sum;
exports.getText = getText;
exports.setAge = setAge;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 导出声明或导出引用在编译到node之后都是在exports添加属性

// export declaration
// 直接导出声明，对应的导入是import {color, name, ...} from "./basic_export.js"
var color = exports.color = "red";
var name = exports.name = "nicholas";
var magic = exports.magic = 7;

function sum(num1, num2) {
    return num1 + num2;
}

var Rectangle = function Rectangle(length) {
    _classCallCheck(this, Rectangle);

    this.length = length;
};

// export reference
// 与导出声明的导入是相同的


function multiply(num1, num2) {
    return num1 * num2;
}
exports.multiply = multiply;

// 不能动态导出或导入
// Error
/*if(true) {
    export {multiply}
}*/

function getText(url, callback) {
    var req = new XMLHttpRequest();

    req.open("GET", url);

    req.onreadystatechange = function () {
        if (req.readyState === 4 && req.status === 200) {
            callback(req.responseText);
        }
    };

    req.send();
}

var age = exports.age = "18";
function setAge(newAge) {
    exports.age = age = newAge;
}

// renaming export
function plus(num1, num2) {
    return num1 + num2;
}
exports.add = plus;

// 导出默认值
// 1. 直接导出默认值
/*export default function(num1, num2) {
    return num1 + num2;
}*/

// 2. 通过标识符导出默认值
// 每个模块默认值只有一个，但是可以有其他多个非默认值

function sum6(num1, num2) {
    return num1 + num2;
}
// export default sum6;

// 3. 通过重命名语法导出默认值
exports.default = sum6;
var nonDefault = exports.nonDefault = 7;