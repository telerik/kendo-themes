#!/usr/bin/env node

const package = require('../package.json');
const branch = process.env.TRAVIS_BRANCH;
const tag = package.release.branchTags[branch];

let command = [ 'npm', 'publish' ];

if (tag) {
    command.push('--tag', tag);
}

const exec = require('child_process').exec;
exec(command.join(' '), function(error, stdout, stderr) {
    console.log(stdout);

    if (error) {
        console.error(`[ERROR] npm publish: ${stderr}`);
    }
});
