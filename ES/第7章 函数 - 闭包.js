
// 闭包
function  createComprison(prop) {
    return function(obj1, obj2) {
        var val1= obj1[prop];
        var val2 = obj2[prop];

        if(val1 < val2) {
            return -1;
        } else if(val1 > val2) {
            return 1;
        } else {
            return 0;
        }
    }
}

var compare = createComprison("name");
var result = compare({"name": "qinghe"}, {"name": "caesar"});
console.log(result);

// 闭包与变量
function createFuncArray() {
    var result = new Array();
    for(var index = 0; index < 10; index++) {
        result[index] = function() {
            console.log(index);
        }
    }
    return result;
}
var funcArray = createFuncArray();
funcArray[2]()

function createFunctions() {
    var result = new Array();
    for(var i = 0; i < 10; i++) {
        result[i] = function(num){
           return function() {
               console.log(num)
           }
        }(i)
    }
    return result;
}

var funcArray2 = createFunctions();
funcArray2[5]()

// 闭包 与 this
var name = "window";
var object = {
    name: "my object",
    getNameFunc: function() {
        return function() {
            return this.name;
        }
    }
}
var getName = object.getNameFunc();
console.log(getName());
// window

var tag = "window";
var obj = {
    tag: "my object",
    getNameFunc: function() {
        var self = this;
        return function() {
            return self.tag;
        }
    }
}
var getName = obj.getNameFunc();
var getName = obj.getNameFunc();
console.log(getName());

// 改变 this 的值
var flag = "window";
var obj3 = {
    flag: "my object",
    getName: function() {
        console.log(this.flag);
    }
}
obj3.getName();
(obj3.getName)();
(obj3.getName = obj3.getName)();

