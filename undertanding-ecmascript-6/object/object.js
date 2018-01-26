// 属性初始化简写
// 当属性名与局部变量相同时可以直接使用局部变量表示属性名和值

// es5的写法
function createPerson(name, age) {
    return {
        name: name,
        age: age
    }
}

// es6
function createPerson(name, age) {
    return {
        name,
        age
    }
}
const name = "qinghe";
const age = 18;
console.log(createPerson(name, age));

// 简洁方法
// es5 方法
const robotOne = {
    name: "nicholas",
    sayName: function () {
        console.log(this.name);
    }
};

// es6 简洁方法 省略冒号和function关键字
const robotTwo = {
    name: "nicholas",
    sayName() {
        console.log(this.name);
    }
};

// 计算属性名
const writer = {};

// es5:
// []的两种用法
// 使用不能作为标记符的字符串字面量
writer["first name"] = "nicholas";

// 使用变量
const lastName = "last name";
writer[lastName] = "zakas";

// 点表示法: 直接使用可用作标记符的字符串
writer.middlename = "feng";
console.log(writer);

// 对象字面量: 使用字符串字面量
const robotThree = {
    "first name": "nicholas"
};
console.log(robotThree["first name"]);

// es6 解决的问题： 在对象字面量中使用 计算属性

// 变量
const color = "red green blue";
const bird = {
    "species": "sparrow",
    [color]: "red"
};
console.log(bird);

const suffix = " bear";
const variousBear = {
    ["black" + suffix]: "tom",
    ["white" + suffix]: "peter"
};
console.log(variousBear);

// Object上的新方法
// Object.is(): 弥补 === 的缺陷
// 除了以下两种情形 Object.is() 与 === 相同

console.log(+0 === -0);
// true
console.log(Object.is(+0, -0));
// false

console.log(NaN === NaN);
// false
console.log(Object.is(NaN, NaN));
// true

// Object.assign()

// mixin
function mixin(receiver, supplier) {
    Object.keys(supplier).forEach((key) = > {
        receiver[key] = supplier[key];
})
    ;
    return receiver;
}

// mixin 执行浅复制: 引用类型的属性值共享
const receiver = {
    name: "qinghe"
};
const supplier = {
    say() {
        console.log(this.name, "hello");
    }
};
mixin(receiver, supplier);
receiver.say();
// hello
// 修改say方法，accepter.say将发生变化，注意不是重写

// Object.assign()
// 第一个参数是receiver, 其他参数是supplier
// 后面的属性可能后覆盖前面的属性
const accepter = {};
Object.assign(accepter,
    {
        type: "js",
        name: "file.sj"
    },
    {
        type: "css"
    }
);
console.log(accepter);

// assign 使用赋值运算符，存取器属性会变成数据属性
const sup = {
    get sayName() {
        return "qinghe";
    }
};
console.log(sup);
// { sayName: [Getter] }

const rev = {};
Object.assign(rev, sup);
console.log(rev);
// { sayName: 'qinghe' }

// 重复属性
// es5 后面的属性覆盖前面的
const obj1 = {
    name: "qinghe",
    name: "caesar"
};
console.log(obj1.name);
// caesar

// 严格模式下报错
// es6 无论严格模式 或 非严格模式 都不报错

/*自有属性的枚举顺序
 *   按升序排列的数值属性
 *   按添加顺序排列的字符串属性
 *   按添加顺序排列的symbol属性*/




