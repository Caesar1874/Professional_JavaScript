// 在区分 函数调用与方法调用时， this 只与最终调用时 （） 操作符的操作数有关， 与前置的逻辑无关
// 尽管 say 变量是由 obj.say 赋值而来的， 但 say() 仍然是函数调用
const obj = {
    name: 'qinghe',
    say: function() {
        console.log('name', this.name)
    }
}

obj.say()

// 必须是 var 变量才定义在 window 上
var name = 'caesar'
const say = obj.say
say()