var msg = "world";
var Obj = function(msg) {
    var self = this;
    this.msg = msg;
    this.shout = function() {
        console.log(this.msg);
    };

    this.waitShout = function() {

        // 为什么这样不行？？
        // this 取决于调用方式
        // self.shout 等价于传递 funciton() { console.log(this.msg)}
        // 在延时后直接调用shout函数, 其中的 this 指向全局对象
        setTimeout(self.shout, 1000);

        // 匿名函数保存了self (闭包)，self 指向 obj1
        // shout 作为obj1 的方法调用
        setTimeout(function() {
            // console.log(typeof self);
            self.shout();
        }, 1000)
    }

};
var obj1 = new Obj("hello");
obj1.waitShout();



var name = "world";
var person = {
    name: "hello",
    say: function() {
        console.log(this.name);

        function sayHi() {
            console.log(this.name);
        }
        sayHi();

        this.sayHi = sayHi;
        this.sayHi();
    }
};
// person.say();



class Foo {
    constructor() {
        this.x = 1;
    }
    print = () => {
    console.log(this.x);
}
}

let foo = new Foo();
foo.print.call({x: 2});

var obj = {
    say: function() {
        console.log(obj.caller);
    }
};

console.dir(caller.callee);