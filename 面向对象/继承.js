
// 原型继承
function SuperClass() {
    this.name = "qinghe";
}

SuperClass.prototype.sayHi = function() {
    console.log("Hi, ", this.name);
};

function SubClass() {
    this.name =  "caesar";
}
SubClass.prototype = new SuperClass();
SubClass.prototype.constructor = SubClass;

const subObj = new SubClass();
subObj.sayHi();

// 原型链
// 类： 实例的 proto 内部属性指向其原型， 原型的constructor 属性指向类的构造函数， 构造函数的 prototype 顺序指向类的原型；
// 构造函数是类的标志，原型是类的本质
// 继承：一个类的原型是另一个类的实例，实例的proto 属性指向其原型，原型作为一个对象，其proto属性指向另一个对象，这就是原型链

// new 创建对象的过程
// 1. 创建新对象
// 2. 新对象作为构造函数的执行环境，也就是 this 指向新对象
// 3. 执行构造函数中的代码，初始化对象，添加属性
// 4. 返回新对象