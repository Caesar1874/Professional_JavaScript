
const loop = (collections) => {
    for(let item of collections) {
        console.log(item)
    }
}

// 可迭代对象
const arr = [1, 2, 3]
const str = 'abcd'
const createIterator = require('./generator')
const iter =createIterator(['apple', 'banana', 'orange'])

const testIterable = () =>{
    loop(arr)
    loop(str)
    loop(iter)
}
if(require.main === module) {
    testIterable()
}
