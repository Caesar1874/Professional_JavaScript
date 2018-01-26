

// 跨浏览器的 log 方法
function log() {
    try {
        console.log.apply(console, arguments);
    } catch(e) {
        try {
            // 老版本opera
            opera.postError.apply(opera, arguments);
        } catch(e) {
            // 原始方法
            alert(Array.prototype.join.call(arguments, " "));
        }
    }
}

// log("qinghe");