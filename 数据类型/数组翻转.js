
var data = {
    rows: [
        {name: "qinghe", age: 15},
        {name: "caesar", age: 25}
    ]
};
console.log(data.rows)
// 如果直接进行reverse， data.rows()也会变， reverse 是直接在原数组上操作的
// var rows = data.rows.reverse();

// 方法 1 遍历
var rows = data.rows.map(function(ele, index) {
    return ele;
});

// 方法 2 slice 创建新数组
var rows = data.rows.slice();


console.log(rows.reverse());
console.log(data.rows);