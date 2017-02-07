var fs = require("fs");
var path = require("path");

module.exports = function(dest, ctx) {
    return new Promise(function(done, error) {
        fs.writeFile(path.join(dest, "customization.md"), "");
    });
};
