function derepeat(arr) {
    let obj = [];
    for(let val of arr) {
        obj[val] = val;
    }
    console.log(obj)
    let newArr = Object.keys(obj);
    return newArr;
}
