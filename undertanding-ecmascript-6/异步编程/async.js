
// 声明 async 函数

// async 总是返回 promise
async function asyncNum() {
    console.log('async num函数同步调用')
    return 123
}

async function asyncNum2() {
    console.log('async num 2函数同步调用')
    return 123
}
async function asyncNum3() {
    console.log('async num 3 函数同步调用')
    return 123
}
//
// asyncNum().then(x => console.log('async结果异步返回', x))
// console.log('async函数同步返回')

// await
async function asyncStr() {
    console.log('async str函数同步调用')
    const result1 = await asyncNum()
    // console.log('async str await', result)
    return result1
}
// .then(x => console.log('async str then', x))
// const p = asyncStr()
// console.log('await', p.then(x => console.log('async str then', x)))
// console.log('async函数同步返回')



async function asyncThree() {
    console.log('async str函数同步调用')
    const result1 = await asyncNum()
    const result2 = await asyncNum2()
    const result3 = await asyncNum3()
    // console.log('async str await', result)

    return [result1, result2, result3]
}
// .then(x => console.log('async str then', x))
const t = asyncThree()
console.log('await', t.then(x => console.log('async str then', x)))
console.log('async函数同步返回')
