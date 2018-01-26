
// 没有 this
const bar = () => {
    console.log('bar', this)
    const foo = () => {
        console.log('foo', this)
    }
    foo()
}

bar()
// window, window

// 箭头函数中的 this  是外层函数的this
const baz = {
    say: function() {
        console.log('say', this)
        const foo = () => {
            console.log('foo', this)
        }
        foo()
    }
}

baz.say()
// baz, baz

