
var fn = 'fn'
console.log('fn')

function foo() {
    
    console.log('foo')
    
    var a = 2
    
    console.log('a')
    
    function baz() {
        console.log(a)
    }
    
    console.log('baz')
    
    fn = baz
}

function bar() {
    console.log('bar')
    
    fn()
}

console.log('before foo')
foo()

console.log('before bar')
bar()