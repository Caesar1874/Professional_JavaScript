// 导出声明或导出引用在编译到node之后都是在exports添加属性

// export declaration
// 直接导出声明，对应的导入是import {color, name, ...} from "./basic_export.js"
export var color = "red";
export let name = "nicholas";
export const magic = 7;

export function sum(num1, num2) {
    return num1 + num2;
}

class Rectangle {
    constructor(length) {
        this.length = length;
    }
}

// export reference
// 与导出声明的导入是相同的
function multiply(num1, num2) {
    return num1 * num2;
}
export {multiply};


// 不能动态导出或导入
// Error
/*if(true) {
    export {multiply}
}*/


export function getText(url, callback) {
    let req = new XMLHttpRequest();

    req.open("GET", url);

    req.onreadystatechange = function() {
        if(req.readyState === 4 && req.status === 200) {
            callback(req.responseText);
        }
    }

    req.send();
}

export let age = "18";
export function setAge(newAge) {
    age = newAge;
}


// renaming export
function plus(num1, num2) {
    return num1 + num2;
}
export {plus as add};

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
export {sum6 as default};
export const nonDefault = 7;


