function Person() {
    this.job = "qinghe"
}
Person.job = "caesar";
// 静态方法中的this 指向 类Person
Person.sayHello = function() {
    console.log("hello");
    console.log(this.job);
    return this.job;
};




