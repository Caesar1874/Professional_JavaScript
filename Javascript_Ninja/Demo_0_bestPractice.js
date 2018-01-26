
// test

// 测试函数的一般形式
// assert(condition, message);
function assert(condition, message) {
    if(condition === true) {
        console.log(message);
    }
}


// performance
const start = new Date().getTime();
const maxCount = 1000;
for(let n = 0; n < maxCount; n++) {
    console.log("tick");
}
elapsed = new Date().getTime() - start;
assert(true, `Measured time: ${elapsed}ms`);