#!/usr/bin/node

var glob = require('glob');
var exec = require('child_process').exec;
var path = require('path');

glob('{styles,src}/**/*.{png,gif,woff}', function(err, files) {
  if (err) {
    console.error(err);
  } else {
    files.forEach(function(filename) {
      console.log('converting asset to data URI:', filename);
      exec([
        'node',
        path.join(__dirname, 'file-to-sass.js'),
        filename
      ].join(' '), function(err, stdout, stderr) {
        if (err) {
          console.error(stderr)
        }
      });
    });
  }
});
