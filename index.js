const fs = require("fs")
const color_list_dir = "./color-list.json"
const path = require("path")

function getColors() {
    fs.readFile(path.resolve(__dirname, color_list_dir), function(e, data) {
        if(e) return console.log("Error while fetching the colors: " + e);

        const colorDataFound = data.toJSON()
    })
}

module.exports = colorDataFound