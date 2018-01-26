// 演示 excutor 是立即执行的
let promise = new Promise(function(resolve, reject) {
    // 模拟占用时间的 操作 1
    console.time('操作1')
    let sum = 1;
    for(let i = 1; i < 1000000000; i++) {
        sum = sum + i
    }
    console.timeEnd('操作1')
    resolve()
})

promise.then(function(){
    console.log('操作2')
})
console.log('hi')
// 操作1
// hi
// 操作2