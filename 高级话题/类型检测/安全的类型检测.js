
// 安全类型检测的原理是 在任何值上调用 Object.prototype.toString() 方法会返回 [object NativeContstructorName] 格式的字符串
// 该方法对于非原生类型始终返回 [object Object] 所以可以区分原生类型与非原生类型

const isArray = (array) => {
    return Object.prototype.toString.call(array) === '[object Array]'
}

const isFunction = (func) => {
    return Object.prototype.toString.call(func) === '[object Function]'
}

