const fs = require('fs');
const componentsHtmlSpecs = require('../src/index.js');

const dist = "./dist";

if (!fs.existsSync(dist)) {
    fs.mkdirSync(dist);
}

fs.writeFileSync(`${dist}/components.json`, JSON.stringify(componentsHtmlSpecs, null, 4));
