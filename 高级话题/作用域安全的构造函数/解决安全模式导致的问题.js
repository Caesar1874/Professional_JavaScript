const log = console.log


// 使用安全模式后, 如果采用构造函数窃取模式进行继承, 子类将不能继承父类的属性
function Polygon(sides) {
    if(this instanceof Polygon) {
        this.sides = sides
        this.getArea = function() {
            return 0
        }
    } else {
        return new Polygon(sides)
    }
}

function Rect(width, height) {
    Polygon.call(this, 2)
    this.width = width
    this.height = height
}

// 使用原型链, 使得 rect 成为 Polygon 的实例, 使 call 的作用恢复正常
Rect.prototype = new Polygon()
const rect = new Rect(5, 10)

// sides 是 undefined
log(rect.sides)

