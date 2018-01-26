
const colors = [1, 2, 3, 4]
const tracking = new Set([1234, 5678, 9011])
const data = new Map()
data.set('title', 'understanding')
data.set('format', 'ebook')

const testEntries = (items) => {
    for(let entry of items.entries()) {
        console.log(entry)
    }
}
const testKeys = (items) => {
    for(let key of items.keys()) {
        console.log(key)
    }
}

const testValues = (items) => {
    for(let value of items) {
        console.log(value)
    }
}
const test = () => {

    // testEntries(colors)
    // testEntries(tracking)
    testEntries(data)

    // testKeys(colors)
    // testKeys(tracking)
    // testKeys(data)

    // testValues(colors)
    // testValues(tracking)
    testValues(data)
}

test()