
// 私有变量： 函数的参数， 局部变量， 内部函数
function add(num1, num2) {
    var sum = num1 + num2;
    return sum;
}

// 特权方法： 访问私有变量的公有方法
// 局部变量作为私有变量
function Person() {
    var name = "qinghe";
    this.getName = function() {
        return name;
    }
    this.setName = function(newName) {
        name = newName
    }
}

var qinghe = new Person();
console.log(qinghe.getName());
qinghe.setName("caesar");
console.log(qinghe.getName());

// 参数作为私有变量
function Person2(name) {
    this.getName = function() {
        return name;
    }
    this.setName = function(newName) {
        name = newName
    }
}

var qinghe = new Person2("qinghe");
console.log(qinghe.getName());
qinghe.setName("caesar");
console.log(qinghe.getName());

// 内部函数作为私有变量
function Person3() {
    var counter = 0;
    function innerPlus() {
        counter ++;
    }
    this.outerPlus = function() {
        return innerPlus
    }
    this.get = function() {
        return counter;
    }
}
var person = new Person3();
person.outerPlus()();
console.log(person.get());




