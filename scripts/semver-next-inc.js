#!/usr/bin/env node

const semver = require('semver');
const { getArg } = require("@progress/kendo-theme-tasks/src/utils");

const next = getArg('--next');
const latestVersion = getArg('--latest');

function inc( next, latest ) {

    if (semver.gt( next, latest )) {
        return semver.inc( next, 'prerelease', 'beta' );
    }

    return semver.inc( latest, 'premajor', 'beta' );
}

process.stdout.write( inc( next, latestVersion ) );
