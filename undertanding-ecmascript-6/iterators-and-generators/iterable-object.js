

// Ierable 为对象添加 entries, keys, vlaues 三种迭代器

class IterableObject {
    constructor(items) {
        this.items = items
    }
    entries() {
        const self = this
        const iter = {
            [Symbol.iterator]: function * () {
                for(let item of Object.keys(self.items)) {
                    const entry = [item, self.items[item]]
                    yield entry
                }
            }
        }
        return iter
    }
    keys() {
        const self = this
        const iter = {
            [Symbol.iterator]: function * () {
                for(let item of Object.keys(self.items)) {
                    yield item
                }
            }
        }
        return iter
    }
    values() {
        const self = this
        const iter = {
            [Symbol.iterator]: function * () {
                for(let item of Object.keys(self.items)) {
                    // 输出 val
                    yield self.items[item]
                }
            }
        }
        return iter
    }
}

const testEntires = () => {
    const obj = {
        name: 'qinghe',
        age: 17,
        job: 'teacher'
    }
    const iterObj = new IterableObject(obj)
    for(let entry of iterObj.entries()) {
        console.log(entry)
    }
}

const testKeys = () => {
    const obj = {
        name: 'qinghe',
        age: 17,
        job: 'teacher'
    }
    const iterObj = new IterableObject(obj)
    for(let entry of iterObj.keys()) {
        console.log(entry)
    }
}

const testValues = () => {
    const obj = {
        name: 'qinghe',
        age: 17,
        job: 'teacher'
    }
    const iterObj = new IterableObject(obj)
    for(let entry of iterObj.values()) {
        console.log(entry)
    }
}


const test = () => {
    // testEntires()
    // testKeys()
    testValues()
}

test()
