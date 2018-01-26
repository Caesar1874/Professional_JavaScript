
// 对象1
const serilizable = {
    serialize() {
        return JSON.stringify(this)
    }
}

// 对象2
const area = {
    getArea() {
        return this.length * this.width
    }
}

// mixin
function mixin(...mixins) {
    const base = function() {}
    Object.assign(base.prototyp, ...mixins)
    return base
}

// 继承
class Square extends mixin(serilizable, area) {

}
