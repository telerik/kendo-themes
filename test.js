// TODO: delete
// If committed, its an accident

// const sassDoc = require("sassdoc");
const fs = require("fs");
const p = require("path");

(async() => {
    // A function which reads from a .scss file and parses all variables in array
    // And filters out
    const readVariables = async(path) => {
        const file = fs.readFileSync(path, "utf8");
        const sassVariableDeclarationRegex = /(\$[a-zA-Z0-9-]+):/g;
        // const result = await sassDoc.parse(path);
        const resultWithoutDuplicates = file
            .match(sassVariableDeclarationRegex)
            .map((i) => i.slice(0, -1))
            .filter((value, index, self) => self.indexOf(value) === index);

        return resultWithoutDuplicates;
        // return result.map((res) => (res.context.type === "variable" ? res.context.name : null)).filter((res) => res !== null);
        // const regex = /\$[a-zA-Z0-9-]+/g;
        // const variables = file.match(regex);
        // return variables;
    };

    const variables = await readVariables(p.join(__dirname, "packages", "fluent", "scss", "button", "_variables.scss"));

    console.log(variables.map((variable) => `${variable}: ${variable},`).join("\n"));
})();
