function add() {
    if (arguments.length < 2) {
        const outArgs = arguments[0]
        return function () {
            const innerArgs = arguments[0]
            return outArgs + innerArgs
        }
    } else {
        return arguments[0] + arguments[1]
    }

}

console.log(add(1)(2))
console.log(add(2, 2))