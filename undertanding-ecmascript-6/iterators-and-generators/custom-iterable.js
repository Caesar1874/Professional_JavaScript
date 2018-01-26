
// Ierable 为对象添加迭代功能
// 可以选择输出 key  或 val
class Iterable {
    constructor(items) {
        this.items = items
    }
    *[Symbol.iterator]() {
        for(let item of Object.keys(this.items)) {
            // 输出 key
            // yield item

            // 输出 val
            yield this.items[item]
        }
    }
}

const testIterable = () => {
    const obj = {'name': 'qinghe', age: 17, job: 'teacher'}
    const iter = new Iterable(obj)
    for(let item of iter) {
        console.log(item)
    }
}

if(require.main = module) {
    testIterable()
}


