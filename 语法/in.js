
let obj = {name: "qinghe", age: 18, job: "engneer"};
for(var item in obj) {
    if(obj.hasOwnProperty(item)){
        console.log(item);
    }
}

