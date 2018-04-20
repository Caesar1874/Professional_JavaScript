function add() {
    if (arguments.length < 2) {
        const outArgs = arguments[0]
        return function () {
            const innerArgs = arguments[0]
            return outArgs + innerArgs
        }
    } else {
        let sum = 0
        for(let i = 0; i < arguments.length; i++) {
            sum += arguments[i]
        }
        return sum
    }
    

}

console.log(add(2)(2))
console.log(add(2, 2))
console.log(add(2, 2, 2))