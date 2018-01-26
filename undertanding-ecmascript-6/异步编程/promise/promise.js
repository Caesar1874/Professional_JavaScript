const fs = require("fs");
const path = require("path");

// 该脚本会将当前目录下 files 中的文件复制

// 回调陷阱： 陷阱不够深，可以继续自己挖
// fs.readdir(`${__dirname}/files/`, function(err, data) {
//     console.log(data)
//     if(err) {
//         console.log(err);
//     }
//     data.forEach(function(file, index) {
//         fs.loadFile(`${__dirname}/files/${file}`, function (err, data) {
//             if (err) {
//                 console.error(err);
//             }
//             fs.writeFile(`${__dirname}/files/target${index}.txt`, data, function (err) {
//                 if (err) {
//                     console.error(err);
//                 }
//                 // 想象此处继续回调
//                 console.log("写入成功！");
//             })
//         });
//     })
// });


// promise
const retrieveDir = function (dir) {
    return new Promise(function (resolve, reject) {
        fs.readdir(dir, function (err, files) {
            if (err) {
                reject(err);
            }
            console.log(files)
            resolve(files);
        })
    })
};

const retrieveDirComplete = retrieveDir(`${__dirname}/files/`);

retrieveDirComplete.then(function (files) {
        var loadFileComplete = loadFile(files);
        loadFileComplete.then(outputFile, function (err) {
            console.log(err);
        });
    },
    function (err) {
        console.log(err);
    }
);

function loadFile(files) {
    return new Promise(function (resolve, reject) {
        files.forEach(function (file, index) {
            fs.readFile(`${__dirname}/files/${file}`, {encoding: "utf-8"}, function (err, data) {
                if (err) {
                    reject(err);
                }
                resolve(data, index);
            })
        });
    })

}
function outputFile(data, index) {
    console.log(index)
    fs.writeFile(`target${index}.txt`, data, function (err) {
        if (err) {
            console.error(err);
        }
        console.log("写入成功！");
    })
}



