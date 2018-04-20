const log = console.log

function Person (name, age) {
    if(this instanceof Person) {
        this.name = name
        this.age = age
    } else {
        return new Person(name, age)
    }
}

Person('qig', 16)

log('window', window.name, window.age)

// 使用安全模式后, 如果采用构造函数窃取模式进行继承, 子类将必能继承父类的属性