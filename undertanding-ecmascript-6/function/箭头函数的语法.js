
// 箭头函数默认返回 => 表达式的值
const bar = value => value * 2
console.log(bar(3))

// 如果 => 是{ 语句块} 必须显式指定 return
const foo = value => { return value * 2}
console.log(foo(2))

// 返回对象字面量
const baz = value => ({value: value})
console.log(baz(4))