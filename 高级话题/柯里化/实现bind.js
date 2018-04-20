
function bind(fn, context) {
    const outArgs = Array.prototype.slice.call(arguments, 2)
    return function() {
        const innerArgs = Array.prototype.slice.call(arguments)
        const finalArgs = outArgs.concat(innerArgs)
        fn.apply(context, finalArgs)
    }
}

const flag = 'global'
function say() {
    console.log(this.flag)
}

const obj = {
    flag: 'local'
}

say()

const bindedSay = bind(say, obj)

bindedSay()