// 数据属性
var student = { };
//通过属性特性定义属性
Object.defineProperty(student, "name", {
    value: "Caesar",
    configurable: true,
    enumerable: true,
    writable: true
})

//可写性
student.name = "qinghe";
console.log(student.name); //qinghe

// 可枚举性
for( var prop in student){
    console.log(prop); // name
}

//可配置性
console.log(delete student.name); // true
console.log(student.name); // undefined


// 修改数据属性的特性
Object.defineProperty(student, "name", {
    value: "Caesar",
    configurable: false,
    enumerable: false,
    writable: false
})
// 不可写
student.name = "Joy";
console.log(student.name); //Caesar

// 不可枚举
console.log("here")
for( var prop in student){
    console.log(prop); // 没有输出
}

// 不可配置
console.log(delete student.name); // false
console.log( student.name); // Caesar

// 访问器属性
// 定义访问器属性
var book = {
    _year: 2004,
    edition: 1
};
Object.defineProperty(book, "year", {
    get: function(){
        return this._year
    },
    set: function(newVal){
        if(newVal > 2004){
            this._year = newVal;
            this.edition += newVal - 2004;
        }
    },
    configurable: true,
    enumerable: true
});

console.log(book.year); // 2004
book.year = 2016;
console.log(book.year);
console.log(book.edition);

//一次定义多个属性
var newBook = {};
Object.defineProperties(newBook, {
    _year: {
        value: 2004
    },
    edition: {
        value: 1
    },
    year: {
        get: function(){
            return this._year;
        },
        set: function(newVal){
            if(newVal > 2004){
                this._year = newVal;
                this.edition += newVal - 2004;
            }
        }
    }
});
console.log(newBook.year);

// 读取属性的特性
console.log(Object.getOwnPropertyDescriptor(newBook, "year"));
// {   get: [Function],
//     set: [Function],
//     enumerable: false,
//     configurable: false }