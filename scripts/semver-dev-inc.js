#!/usr/bin/env node

const semver = require('semver');
const { getArg } = require("@progress/kendo-theme-tasks/src/utils");

const devVersion = getArg('--dev');
const latestVersion = getArg('--latest');

function inc( dev, latest ) {

    if (semver.gt( dev, latest )) {
        return semver.inc( dev, 'prerelease', 'dev' );
    }

    return semver.inc( latest, 'prerelease', 'dev' );
}

process.stdout.write( inc( devVersion, latestVersion) );
