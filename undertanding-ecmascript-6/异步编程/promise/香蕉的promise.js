const log = console.log.bind(console)

class BananasPromise {
    constructor(func) {
        if(typeof func !== 'function') {
            throw new Error(func, 'is no a function')
        }
        this.func = func
        this.state = 'init'
        const resolve = this.resolve.bind(this)
        const reject = this.reject.bind(this)
        const r = () => {
            func(resolve, reject)
            return this
        }
        return r
    }

    _efunc() {

    }

    then(done) {
        this.done = done || this._efunc
        if(this.state === 'done') {
            done(this.args)
        }
        return this
    }

    catch(fail) {
        this.fail = fail || this._efunc
        if(this.state === 'fail') {
            fail(this.err)
        }
    }

    resolve(args='') {
        this.state = 'done'
        this.args = args
        this.done && this.then(this.done)
    }

    reject(args='') {
        this.state = 'fail'
        this.err = args
        this.catch && this.catch(this.fail)
    }

    static _init() {
        const cls = this
        cls.state = 'init'
        cls.done = () => {}
        cls.fail = () => {}
        cls._resule = []
        cls._err = null
    }

    static all(array) {
        const cls = this
        let len = array.length
        cls._init()
        array.forEach((i, index) => {
            if(cls._err !== null) {
                return
            }
            i().then((a) => {
                if(cls._err !== null) {
                    return
                }
                len--
                cls._resule[index] = a
                if(len === 0) {
                    cls.state = 'done'
                    cls.then()
                }
            }).catch((err) => {
                if(cls._err !== null) {
                    return
                }
                cls.state = 'fail'
                cls._err = err
                cls.catch()
            })
        })
        return this
    }

    static then(done) {
        const cls = this
        if(this.state === 'done') {
            cls.done(cls._resule)
        } else if(this.state === 'init') {
            cls.done = done || cls.done
        }
        return this
    }

    static catch(fail) {
        const cls = this
        if(cls.state === 'fail') {
            cls.fail(cls._err)
        } else if(cls.state === 'init') {
            cls.fail = fail || cls.fail
        }
    }

    static race(array) {
        const cls = this
        cls._init()
        array.forEach((item) => {
            if(cls.state === 'done' || cls.state === 'fail') {
                return
            }
            item().then((data) => {
                if(cls.state === 'done' || cls.state === 'fail') {
                    return
                }
                cls.state = 'done'
                cls._resule = data
                cls.then()
            }).catch((err) => {
                if(cls.state === 'done' || cls.state === 'fail') {
                    return
                }
                cls.state = 'fail'
                cls._err = err
                cls.catch()
            })
        })
        return cls
    }
}


const p = new BananasPromise(function(resolve, reject) {
    i = 0
    while(i < 100) {
        i ++
        console.log(i)
    }
    resolve()
})

BananasPromise.then(function() {
    console.log('resolved')
})