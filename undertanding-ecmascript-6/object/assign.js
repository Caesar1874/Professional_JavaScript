
// 返回合并后的对象，也就是第一个参数表示的对象
const obj1= {
    name: 'qinghe'
};
const obj2 = {
    age: '18'
};

const person = Object.assign({}, obj1, obj2);
// person = {name: "qinghe", age: "18"}

const person2 = Object.assign(obj1, obj2)
// person = {name: "qinghe", age: "18"}
// obj1 = {name: "qinghe", age: "18"}