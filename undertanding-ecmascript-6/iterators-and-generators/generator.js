
// generator 函数 示例

const createIterator = function* () {
    yield 1
    yield 2
    yield 3
}

const createIterFor = function* (items) {
    for(let i =0; i < items.length; i++) {
        yield items[i]
    }
}

const testCreateIterator = () => {
    let iter = createIterator()
    console.log(iter.next())
    console.log(iter.next())
    console.log(iter.next())
    console.log(iter.next())
}

const testCreateIterFor = () => {
    let iter = createIterFor([1, 2, 3])
    console.log(iter.next())
    console.log(iter.next())
    console.log(iter.next())
    console.log(iter.next())
}

const test = () => {
    // testCreateIterator()
    testCreateIterFor()
}

if(require.main === module) {
    test()
}
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: undefined, done: true }

module.exports = createIterFor