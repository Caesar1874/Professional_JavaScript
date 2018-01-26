
### es5 从对象获取数据
```javascript
let options = {
    repeat: true,
    save: false
};
let repeat = options.repeat;
let save = options.save;
```

### destructuring

#### 解构初始化
1. 解构的基本语法： 
```javascript
// read from location, then assign to variable
var { location : variable } = detructObj;
```
简写形式 :
```javascript
var { identifier } = detructObj;
// 相当于 read from identifier, the assign to identifier;
```
示例： 
```javascript
// 左侧是 属性初始化简写形式，对象中是局部变量，并从node对象获取值
let node = {
    type: "identifier",
    name: "foo"
};
let { type, name } = node;
console.log(type);
console.log(name);
```
使用解构时，无论是 var, let, const 都必须提供初始值
```javascript
// Error
let { type, name };
```
也可以在变量声明之后进行解构赋值
```javascript
let obj1 = {
    width: "40px",
    height: "50px"
};
// 先声明变量
let width = 40;
let height = 50;
// 为什么需要(): {}会被解释为块级作用域中，而块级作用域中不能作为左值；
({width, height} = obj1);
console.log(width);
console.log(height);
```

解构赋值中的局部变量 如果没有对应的属性，其值为undefined
```javascript
let obj2 = {
    left: "50",
    right: "30"
};
let {left, right, top} = obj2;
console.log(left);
console.log(right);
console.log(top); // undefined
```

指定默认值
```javascript
let {border, fontSize, lineHeight = "50haha"} = obj2;
console.log(lineHeight); // 50haha
```
局部变量与对象属性不同名
```javascript
let obj3 = {
    color: "red",
    bgColor: "green"
};
// “属性名” ： “局部变量”
// 可以添加默认值
let {color: localColor, bgColor: localBgColor = "gray"} = obj3;
console.log(localColor);
console.log(localBgColor);
```

解构嵌套对象
```javascript
// readFrom "attrName" : assignTo "varName"
let obj4 = {
    loc: {
        start: {
            line: 1,
            column: 1
        }
    }
};
let {loc: {start}} = obj4;
console.log(start.line);
console.log(start.column);
```

## 数组解构
#### 按位置解构

```
let colors = ["red", "green", "blue"];
let [firstColor, secondColor] = colors;
console.log(firstColor);
// "red"
console.log(secondColor);
// "green"
```
逗号作为占位符
```javascript
let [, , thirdColor] = colors;
console.log(thirdColor);
// "blue"

```

交换变量的值
```javascript
let margin = 5;
let padding = 4;
[margin, padding] = [padding, margin];
console.log(margin);
// 4
console.log(padding);
// 5
```
解构嵌套数组
```javascript
let colorLoop = ["red", ["green", "blue"]];
let [colorOne, [colorTwo]] = colorLoop;
console.log(colorOne);
// "red"
console.log(colorTwo);
// "green"

```
rest items
将数组中的剩余项作为数组赋值给变量
```javascript
let animals = ["cat", "dog", "monkey"];
let [animalOne, ...animalsOther] = animals;
console.log(animalOne);
// "cat"
console.log(animalsOther);
// ["dog", "monkey"]

```
克隆数组
es5 concat()
```javascript

let dolly = ["a", "b", "c"];
let dollyToo = dolly.concat();
console.log(dollyToo);
// [ 'a', 'b', 'c' ]
console.log(dolly === dollyToo);
// false

```
es6 rest item
```javascript
let sheep = ["sheep", "mutton", "lamb"];
let [...sheepCopy] = sheep;
console.log(sheepCopy);

```
解构参数
```javascript
function setCookie(name, value, {secure, path, domain, expires}) {
    //
}
setCookie("type", "js", {
    secure: true,
    expires: 6000
});

```



