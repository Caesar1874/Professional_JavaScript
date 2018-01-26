const log = console.log



// const r = int >>> 24
// log('r', r)
//
// log('bit', int.toString(2).length)
// const bits = int.toString(2)
// const rStr = bits.slice(0, 8)
// log('r', parseInt(rStr, 2))
// const n = 24
// log('24', n.toString(2))

const parseBit = function(int, length) {
    // @int 表示二进制序列的整数, 每 8 位表示一个整数
    // @length 二进制序列的长度
    // @return 转换结果的数组
    
    // 转换为二进制
    let bits = int.toString(2)
    // 补足 32 位
    while(bits.length < length) {
        bits = '0' + bits
    }
    
    // 将二进制序列每 8 位分割为一个数字
    const result = []
    for(let i = 0; i < length / 8; i ++) {
        const start = 8 * i
        const end = 8 * (i + 1)
        const curr = parseInt(bits.slice(start, end), 2)
        result.push(curr)
    }
    return result
}

const int = 5484709
const [r, g, b, a] = parseBit(int, 24)
log(r, g, b, a)
// 83 176 165



