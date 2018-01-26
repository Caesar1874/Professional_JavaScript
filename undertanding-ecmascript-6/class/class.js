
// es5 类
function PersonType(name) {
    this.name = name;
}

PersonType.prototype.sayName = function() {
    console.log(this.name);
};

let person = new PersonType("Nicholas");
person.sayName();
// "nicholas"

console.log(person instanceof PersonType);
// true
console.log(person instanceof Object);
// true

// es6 类
class PersonClass {
    // 构造函数
    constructor(name) {
        // 实例属性应在此定义
        this.name = name;
    }

    // 实例方法
    sayName() {
        console.log(this.name)
    }
}

let person1 = new PersonClass("Nicholas");
person.sayName();
// "Nicholas"

console.log(person1 instanceof PersonClass);
// true
console.log(person1 instanceof Object);
// true

console.log(typeof PersonClass);
// function
console.log(typeof PersonClass.prototype.sayName);
// function

// es5 继承
// 基类
function Rectangle(length, width) {
    this.length = length;
    this.width = width;
}

Rectangle.prototype.getArea = function() {
    return this.length * this.width;
};

// 派生类
function Square(length) {
    Rectangle.call(this, length, length);
}

Square.prototype = Object.create(Rectangle.prototype);
let square = new Square(3);

console.log(square.getArea());
// 9
console.log(square instanceof Square);
// true
console.log(square instanceof Rectangle);
// true

// es6 继承

// 基类
/*class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    getArea() {
        return this.length * this.length;
    }
}*/

// inheritance
/*class Square extends Rectangle {
    constructor(length) {
        // Rectangle.call(this, length, length)
        super(length, length);
    }
}*/

let square2 = new Square(3);
console.log(square.getArea());
// 9
console.log(square instanceof Square);
// true
// console.log(square instanceof );

// 派生类必须在constructor中调用super()
// 如果省略constructor 将自动调用
/*class Square extends Rectangle {
    // no constructor
}*/

// equal to
/*class Square extends Rectangle {
    constructor (...args) {
        super(...args);
    }
}*/

/*super
* 只能用于派生类
* 在使用this之前调用super
* */

// 基于表达式的派生类
// 可以继承任何表达式，表达式的值应该是具有[[constructor]]属性的函数
function RectangleV2(length, width) {
    this.length = length;
    this.width = width;
}

RectangleV2.prototype.geArea = function() {
    return this.length * this.length;
};

class SquareV2 extends Rectangle {
    constructor(length) {
        super(length, length);
    }
}

// 继承built-in类型
// built-in 数组的行为
let colors = [];
colors[0] = "red";
console.log("colors.length: ", colors.length);
// 1
colors.length = 0;
console.log(colors[0]);
// undefined

// inherit
function MyArray() {
    Array.apply(this, arguments);
}
MyArray.prototype = Object.create(Array.prototype, {
    constructor : {
        value: MyArray,
        writable: true,
        configurable: true,
        enumerable: true

    }
});

// 继承没有实现length功能
let colorsV2 = new MyArray();
colorsV2[0] = "red";
console.log(colorsV2.length);
// 0
colors.length = 0;
console.log(colorsV2[0]);
// red

// 实例方法 与 this
class Person {
    constructor() {
        this.name = "qinghe"
    }
    sayGreet() {
        this.greeting(this.name);
    }
    greeting(name) {
        console.log(this)
        console.log("hello", this.name)
    }
}

var p = new Person();
p.sayGreet();













