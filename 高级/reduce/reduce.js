
// 用于模拟 $(this).attr(key)
const attr = (key) => {
    const table = {
        'data-handle-color': 'red',
        'data-wrapper-class': 'toggle',
        'data-rail-color': 'green',
        'data-always-visible': true,
        'data-rail-visible': false,
    }
    return table[key]
}

// 将数组 arr 映射为一个 对象， 值来自 attr()函数
const reduce = (arr) => {
    const attrList = arr.reduce((prev, curr) => {
        var value = attr(curr)
        if(value !== undefined) {
            prev[curr] = value
        }
        return prev
    }, {})
    return attrList
}

const testReduce = () => {
    var attributes = [
        'data-handle-color',
        'data-wrapper-class',
        'data-rail-color',
        'data-always-visible',
        'data-rail-visible'
    ]
    console.log(reduce(attributes))
}

testReduce()
