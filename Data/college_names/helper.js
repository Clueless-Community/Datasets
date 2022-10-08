const lists = require("./collage_names_array");
const fs = require("fs")

const collageList = []
lists.map((item)=>{
    collageList.push(
        {"name": item}
    )
});
const list = JSON.stringify(collageList)


fs.writeFile('collage_list_json.js', list, (e)=>{
    if (e){
        throw e
    }
})

// console.log(list)