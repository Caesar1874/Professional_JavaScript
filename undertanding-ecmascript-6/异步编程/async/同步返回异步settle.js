async function asyncNum() {
    return 123
}

asyncNum().then(x => console.log('async结果异步返回', x))
console.log('async函数同步返回')