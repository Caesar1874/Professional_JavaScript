function create(type, actions) {
    var result = {}
    var keys = Object.keys(actions)
    for(var i = 0; i < keys.length; i++) {
        var k = keys[i]
        var v = actions[k]
        var s = `console_application_type@${type}@${k}`
        result[k] = s
    }
    return result
}

const type = 'MOVE'
const actions = {"key1": "val2", 'key2': "val2"}
console.log(create(type, actions))