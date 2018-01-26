
// 实现迭代器
const createIterator= (items) => {
    let index = 0;
    const next = () => {
        const done = index >= items.length
        const value = !done ? items[index] : undefined
        index++
        return {
            done,
            value
        }
    }
    const iterator = {next}
    return iterator
}

const  testCreateIterator = () => {
    const iterator = createIterator([1, 2, 3])
    console.log(iterator.next())
    console.log(iterator.next())
    console.log(iterator.next())
    console.log(iterator.next())
}

if(require.main === module) {
    testCreateIterator()
}

// { done: false, value: 1 }
// { done: false, value: 2 }
// { done: false, value: 3 }
// { done: true, value: undefined }

module.exports = createIterator