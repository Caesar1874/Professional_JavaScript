
class Person {

    sayHi() {
        // 不能修改类名
        // Person = 'qinhge'

        // 可以定义同名变量
        const Person = 'qing'
        console.log('hi', Person)
    }

}
// 可以在类外修改 class 声明的变量
// Person = 'qin'

// 不能重复声明
// let Person = ''

// const p = new Person()
// p.sayHi()