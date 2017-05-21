
class EventTarget {
    constructor() {
        this.handlers = {}
    }

    // 注册处理函数
    addHandler(type, handler) {
        // 如果指定指定事件尚未指定任何处理器，则初始化为 []
        if(typeof this.handlers[type] == 'undefined') {
            this.handlers[type] = []
        }
        // 添加一个监听器
        this.handlers[type].push(handler)
    }

    // 触发事件
    fire(event) {
        if(event.target === 'undefined') {
            event.target = this
        }
        if(this.handlers[event.type] instanceof Array) {
            const handlers = this.handlers[event.type]
            handlers.forEach(function(handler) {
                handler(event)
                }
            )
        }
    }

    // 注销处理函数
    removerHandler(type, handler) {
        if(this.handlers[type] instanceof Array) {
            var handlers = this.handlers[type]
            handlers.forEach(function(h, index) {
                if(h === handler) {
                    handlers.splice(index, 1)
                }
            })
        }
    }
}


// 使用 EventTarget
// 处理函数
const handleMessage = (event) => {
    console.log("Message received: " + event.message)
}

const testEventTarget = function() {
    // 新建对象
    var target = new EventTarget()
// 注册
    target.addHandler('message', handleMessage)
// 触发
// event  中只要有 type 属性
    const event = {
        type: 'message',
        message: 'hello world'
    }
    target.fire(event)

// 注销
    target.removerHandler('message', handleMessage)

// 再次触发, 应该无响应
    target.fire(event)
}

if(require.main === module) {
    testEventTarget()
}

module.exports = EventTarget

