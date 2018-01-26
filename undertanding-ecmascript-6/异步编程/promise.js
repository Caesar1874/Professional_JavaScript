// 创建 promise

let fs = require('fs')
// 采用工厂模式创建 promise 实例
const readFile = (filename) => {
    const executor = (resolve, reject) => {
        // 异步操作
        fs.readFile(filename, {encoding: 'utf8'}, (err, contents) => {
            // 操作失败，调用 reject, 并传递错误信息
            if(err) {
                reject(err)
                return
            }
            // 操作成功, 传递操作结果
            resolve(contents)
        })
    }
    const promise = new Promise(executor)
    return promise
}

// 使用 readFile
const testReadFile = () => {
    let promise = readFile('test.txt')
    const resolver = (contents) => {
        console.log('Yea, it is sucessful, this is it:', contents)
    }
    const rejecter = (err) =>{
        console.log('oh, it is failure, there some information: ', err)
    }
    promise.then(resolver, rejecter)
}

const test = () => {
    testReadFile()
}

if(require.main === module) {
    test()
}
