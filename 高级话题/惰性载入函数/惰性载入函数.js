// 惰性载入

// 该函数每次调用时都会进行先进行检测, 实际上检测一次就够了
function createXHR () {
    if (typeof XMLHttpRequest !== 'undefined') {
        return new XMLHttpRequest()
    } else if (typeof ActiveXObject !== 'undefined') {
        if (typeof arguments.callee.activeXString !== 'string') {
            var versions = ['MSXML2.XMLHttp.6.0', 'MSXML2.XMLHttp.3.0',
                  'MSXML2.XMLHttp'],
              i, len
            for (i = 0, len = versions.length; i < len; i++) {
                try {
                    new ActiveXObject(versions[i])
                    arguments.callee.activeXString = versions[i]
                    break
                } catch (ex) {
                    //跳过
                }
            }
        }
        return new ActiveXObject(arguments.callee.activeXString)
    } else {
        throw new Error('No XHR object available.')
    }
}

// 在第一次调用是对原函数进行覆盖, 之后的调用就是直接调用正确的函数
function createXHR () {
    if (typeof XMLHttpRequest != 'undefined') {
        createXHR = function () {
            return new XMLHttpRequest()
        }
    } else if (typeof ActiveXObject != 'undefined') {
        createXHR = function () {
            if (typeof arguments.callee.activeXString != 'string') {
                var versions = ['MSXML2.XMLHttp.6.0', 'MSXML2.XMLHttp.3.0',
                      'MSXML2.XMLHttp'],
                  i, len
                for (i = 0, len = versions.length; i < len; i++) {
                    try {
                        new ActiveXObject(versions[i])
                        arguments.callee.activeXString = versions[i]
                        break
                    } catch (ex) {
                        //skip
                    }
                }
            }
            return new ActiveXObject(arguments.callee.activeXString)
        }
    } else {
        createXHR = function () {
            throw new Error('No XHR object available.')
        }
    }
    return createXHR()
}

