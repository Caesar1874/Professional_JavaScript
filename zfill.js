function zfill (str, length) {
    if(str.length === length) {
        return str
    } else {
        return zfill('0' + str, length)
    }
}

console.log('result', zfill('*', 5))