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
    // this 是 Rect 的实例, 但 rect 不是 Polygon 的实例, 所以这里调用 call 不能实现对 Polygon 的继承
    Polygon.call(this, 2)
    this.width = width
    this.height = height
}

const rect = new Rect(5, 10)

// sides 是 undefined
log(rect.sides)

