// 获取对象中的指定属性
function pick(obj) {
    let result = Object.create(null)
    for(let i = 1; i < arguments.length; i++) {
        result[arguments[i]] = obj[arguments[i]]
    }
    return result
}

let obj = {
    name: 'qinhge',
    age: 'jsdklf',
    job: 'en'
}
console.log(pick(obj, 'name', 'age'))