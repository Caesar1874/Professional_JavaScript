// 在区分 函数调用与方法调用时， this 只与最终调用时 （） 操作符的操作数有关， 与前置的逻辑无关
// fn() 只能是函数调用
// arguments[0]() 是方法调用

// this
const name = 'caesar';

const obj = {
    name: 'qinghe',
    say: function() {
        console.log('name', this.name)
    }
};


(function(fn) {
    fn()
    arguments[0]()
})(obj.say);