const fs = require('fs');
const extensionmapping = require("./util.js");

//console.log(extensionmapping);

let folderpath = "./downloads";

let content = fs.readdirSync(folderpath);
//console.log(content);

for (let i = 0; i < content.length; i++) {
    sortfile(content[i]);
}
function getextension(file) {
    return file.split(".")[1];
}
function checkextensionfolder(extension) {
    let extensionfoldername = folderpath;

    for (let key in extensionmapping) {
        let extensions = extensionmapping[key];
        if (extensions.includes(extension)) {
            extensionfoldername = extensionfoldername + "/" + key;
            break;
        }
    }
    if (!fs.existsSync(extensionfoldername)) {
        fs.mkdirSync(extensionfoldername);
    }
    return extensionfoldername;
}

function movefile(file, extensionfoldername) {
    let src = folderpath + "/" + file;
    let des = extensionfoldername + "/" + file;
    fs.copyFileSync(src, des);
    fs.unlinkSync(src);
}
function sortfile(file) {
    let extension = getextension(file)
    //console.log(extension);

    let extensionfoldername = checkextensionfolder(extension);
    movefile(file, extensionfoldername);
}