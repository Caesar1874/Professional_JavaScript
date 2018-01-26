const log = require('../log')

// 通过静态方法实现单元测试

class  Person {
    constructor([name, age, job]) {
        this.name = name
        this.age = age
        this.job = job
    }
    getName() {
        return this.name
    }
    setAge(newAge) {
        this.age = newAge
    }

    // 测试
    static main() {
        const inst = new this(['qinghe', 18, 'teacher'])
        log(inst)
    }
}

const testMain = () => {
    Person.main()
}

if(require.main = module) {
    testMain()
}